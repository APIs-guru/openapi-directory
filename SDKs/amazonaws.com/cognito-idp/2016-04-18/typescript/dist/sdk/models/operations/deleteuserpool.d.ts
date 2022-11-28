import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteUserPoolXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceDeleteUserPool = "AWSCognitoIdentityProviderService.DeleteUserPool"
}
export declare class DeleteUserPoolHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteUserPoolXAmzTargetEnum;
}
export declare class DeleteUserPoolRequest extends SpeakeasyBase {
    headers: DeleteUserPoolHeaders;
    request: shared.DeleteUserPoolRequest;
}
export declare class DeleteUserPoolResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    userImportInProgressException?: any;
}
