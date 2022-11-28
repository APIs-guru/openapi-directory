import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteUserPoolDomainXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceDeleteUserPoolDomain = "AWSCognitoIdentityProviderService.DeleteUserPoolDomain"
}
export declare class DeleteUserPoolDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteUserPoolDomainXAmzTargetEnum;
}
export declare class DeleteUserPoolDomainRequest extends SpeakeasyBase {
    headers: DeleteUserPoolDomainHeaders;
    request: shared.DeleteUserPoolDomainRequest;
}
export declare class DeleteUserPoolDomainResponse extends SpeakeasyBase {
    contentType: string;
    deleteUserPoolDomainResponse?: Map<string, any>;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
