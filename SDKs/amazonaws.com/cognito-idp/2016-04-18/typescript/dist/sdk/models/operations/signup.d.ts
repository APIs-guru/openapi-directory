import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SignUpXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceSignUp = "AWSCognitoIdentityProviderService.SignUp"
}
export declare class SignUpHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SignUpXAmzTargetEnum;
}
export declare class SignUpRequest extends SpeakeasyBase {
    headers: SignUpHeaders;
    request: shared.SignUpRequest;
}
export declare class SignUpResponse extends SpeakeasyBase {
    codeDeliveryFailureException?: any;
    contentType: string;
    internalErrorException?: any;
    invalidEmailRoleAccessPolicyException?: any;
    invalidLambdaResponseException?: any;
    invalidParameterException?: any;
    invalidPasswordException?: any;
    invalidSmsRoleAccessPolicyException?: any;
    invalidSmsRoleTrustRelationshipException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    signUpResponse?: shared.SignUpResponse;
    statusCode: number;
    tooManyRequestsException?: any;
    unexpectedLambdaException?: any;
    userLambdaValidationException?: any;
    usernameExistsException?: any;
}
