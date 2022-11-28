import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum InitiateAuthXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceInitiateAuth = "AWSCognitoIdentityProviderService.InitiateAuth"
}
export declare class InitiateAuthHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: InitiateAuthXAmzTargetEnum;
}
export declare class InitiateAuthRequest extends SpeakeasyBase {
    headers: InitiateAuthHeaders;
    request: shared.InitiateAuthRequest;
}
export declare class InitiateAuthResponse extends SpeakeasyBase {
    contentType: string;
    initiateAuthResponse?: shared.InitiateAuthResponse;
    internalErrorException?: any;
    invalidLambdaResponseException?: any;
    invalidParameterException?: any;
    invalidSmsRoleAccessPolicyException?: any;
    invalidSmsRoleTrustRelationshipException?: any;
    invalidUserPoolConfigurationException?: any;
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
