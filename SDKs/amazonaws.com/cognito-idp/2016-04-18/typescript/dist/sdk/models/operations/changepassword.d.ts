import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ChangePasswordXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceChangePassword = "AWSCognitoIdentityProviderService.ChangePassword"
}
export declare class ChangePasswordHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ChangePasswordXAmzTargetEnum;
}
export declare class ChangePasswordRequest extends SpeakeasyBase {
    headers: ChangePasswordHeaders;
    request: shared.ChangePasswordRequest;
}
export declare class ChangePasswordResponse extends SpeakeasyBase {
    changePasswordResponse?: Map<string, any>;
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    invalidPasswordException?: any;
    limitExceededException?: any;
    notAuthorizedException?: any;
    passwordResetRequiredException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    userNotConfirmedException?: any;
    userNotFoundException?: any;
}
