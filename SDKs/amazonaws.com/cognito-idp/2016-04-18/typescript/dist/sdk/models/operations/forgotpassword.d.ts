import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ForgotPasswordXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceForgotPassword = "AWSCognitoIdentityProviderService.ForgotPassword"
}
export declare class ForgotPasswordHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ForgotPasswordXAmzTargetEnum;
}
export declare class ForgotPasswordRequest extends SpeakeasyBase {
    headers: ForgotPasswordHeaders;
    request: shared.ForgotPasswordRequest;
}
export declare class ForgotPasswordResponse extends SpeakeasyBase {
    codeDeliveryFailureException?: any;
    contentType: string;
    forgotPasswordResponse?: shared.ForgotPasswordResponse;
    internalErrorException?: any;
    invalidEmailRoleAccessPolicyException?: any;
    invalidLambdaResponseException?: any;
    invalidParameterException?: any;
    invalidSmsRoleAccessPolicyException?: any;
    invalidSmsRoleTrustRelationshipException?: any;
    limitExceededException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unexpectedLambdaException?: any;
    userLambdaValidationException?: any;
    userNotConfirmedException?: any;
    userNotFoundException?: any;
}
