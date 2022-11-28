import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AdminSetUserPasswordXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAdminSetUserPassword = "AWSCognitoIdentityProviderService.AdminSetUserPassword"
}
export declare class AdminSetUserPasswordHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminSetUserPasswordXAmzTargetEnum;
}
export declare class AdminSetUserPasswordRequest extends SpeakeasyBase {
    headers: AdminSetUserPasswordHeaders;
    request: shared.AdminSetUserPasswordRequest;
}
export declare class AdminSetUserPasswordResponse extends SpeakeasyBase {
    adminSetUserPasswordResponse?: Map<string, any>;
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    invalidPasswordException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    userNotFoundException?: any;
}
