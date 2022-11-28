import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateUserPoolDomainXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceUpdateUserPoolDomain = "AWSCognitoIdentityProviderService.UpdateUserPoolDomain"
}
export declare class UpdateUserPoolDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateUserPoolDomainXAmzTargetEnum;
}
export declare class UpdateUserPoolDomainRequest extends SpeakeasyBase {
    headers: UpdateUserPoolDomainHeaders;
    request: shared.UpdateUserPoolDomainRequest;
}
export declare class UpdateUserPoolDomainResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateUserPoolDomainResponse?: shared.UpdateUserPoolDomainResponse;
}
