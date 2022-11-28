import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AdminInitiateAuthXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAdminInitiateAuth = "AWSCognitoIdentityProviderService.AdminInitiateAuth"
}
export declare class AdminInitiateAuthHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminInitiateAuthXAmzTargetEnum;
}
export declare class AdminInitiateAuthRequest extends SpeakeasyBase {
    headers: AdminInitiateAuthHeaders;
    request: shared.AdminInitiateAuthRequest;
}
export declare class AdminInitiateAuthResponse extends SpeakeasyBase {
    adminInitiateAuthResponse?: shared.AdminInitiateAuthResponse;
    contentType: string;
    internalErrorException?: any;
    invalidLambdaResponseException?: any;
    invalidParameterException?: any;
    invalidSmsRoleAccessPolicyException?: any;
    invalidSmsRoleTrustRelationshipException?: any;
    invalidUserPoolConfigurationException?: any;
    mfaMethodNotFoundException?: any;
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
