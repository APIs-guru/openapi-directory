import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ConfirmForgotPasswordXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceConfirmForgotPassword = "AWSCognitoIdentityProviderService.ConfirmForgotPassword"
}
export declare class ConfirmForgotPasswordHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ConfirmForgotPasswordXAmzTargetEnum;
}
export declare class ConfirmForgotPasswordRequest extends SpeakeasyBase {
    headers: ConfirmForgotPasswordHeaders;
    request: shared.ConfirmForgotPasswordRequest;
}
export declare class ConfirmForgotPasswordResponse extends SpeakeasyBase {
    codeMismatchException?: any;
    confirmForgotPasswordResponse?: Map<string, any>;
    contentType: string;
    expiredCodeException?: any;
    internalErrorException?: any;
    invalidLambdaResponseException?: any;
    invalidParameterException?: any;
    invalidPasswordException?: any;
    limitExceededException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyFailedAttemptsException?: any;
    tooManyRequestsException?: any;
    unexpectedLambdaException?: any;
    userLambdaValidationException?: any;
    userNotConfirmedException?: any;
    userNotFoundException?: any;
}
