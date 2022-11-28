import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ConfirmSignUpXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceConfirmSignUp = "AWSCognitoIdentityProviderService.ConfirmSignUp"
}
export declare class ConfirmSignUpHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ConfirmSignUpXAmzTargetEnum;
}
export declare class ConfirmSignUpRequest extends SpeakeasyBase {
    headers: ConfirmSignUpHeaders;
    request: shared.ConfirmSignUpRequest;
}
export declare class ConfirmSignUpResponse extends SpeakeasyBase {
    aliasExistsException?: any;
    codeMismatchException?: any;
    confirmSignUpResponse?: Map<string, any>;
    contentType: string;
    expiredCodeException?: any;
    internalErrorException?: any;
    invalidLambdaResponseException?: any;
    invalidParameterException?: any;
    limitExceededException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyFailedAttemptsException?: any;
    tooManyRequestsException?: any;
    unexpectedLambdaException?: any;
    userLambdaValidationException?: any;
    userNotFoundException?: any;
}
