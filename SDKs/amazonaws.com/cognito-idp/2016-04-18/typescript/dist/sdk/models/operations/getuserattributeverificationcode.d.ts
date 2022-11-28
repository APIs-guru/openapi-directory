import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetUserAttributeVerificationCodeXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceGetUserAttributeVerificationCode = "AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode"
}
export declare class GetUserAttributeVerificationCodeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetUserAttributeVerificationCodeXAmzTargetEnum;
}
export declare class GetUserAttributeVerificationCodeRequest extends SpeakeasyBase {
    headers: GetUserAttributeVerificationCodeHeaders;
    request: shared.GetUserAttributeVerificationCodeRequest;
}
export declare class GetUserAttributeVerificationCodeResponse extends SpeakeasyBase {
    codeDeliveryFailureException?: any;
    contentType: string;
    getUserAttributeVerificationCodeResponse?: shared.GetUserAttributeVerificationCodeResponse;
    internalErrorException?: any;
    invalidEmailRoleAccessPolicyException?: any;
    invalidLambdaResponseException?: any;
    invalidParameterException?: any;
    invalidSmsRoleAccessPolicyException?: any;
    invalidSmsRoleTrustRelationshipException?: any;
    limitExceededException?: any;
    notAuthorizedException?: any;
    passwordResetRequiredException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unexpectedLambdaException?: any;
    userLambdaValidationException?: any;
    userNotConfirmedException?: any;
    userNotFoundException?: any;
}
