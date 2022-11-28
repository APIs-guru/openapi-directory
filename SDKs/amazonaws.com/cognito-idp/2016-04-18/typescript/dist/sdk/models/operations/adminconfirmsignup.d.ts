import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AdminConfirmSignUpXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAdminConfirmSignUp = "AWSCognitoIdentityProviderService.AdminConfirmSignUp"
}
export declare class AdminConfirmSignUpHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminConfirmSignUpXAmzTargetEnum;
}
export declare class AdminConfirmSignUpRequest extends SpeakeasyBase {
    headers: AdminConfirmSignUpHeaders;
    request: shared.AdminConfirmSignUpRequest;
}
export declare class AdminConfirmSignUpResponse extends SpeakeasyBase {
    adminConfirmSignUpResponse?: Map<string, any>;
    contentType: string;
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
