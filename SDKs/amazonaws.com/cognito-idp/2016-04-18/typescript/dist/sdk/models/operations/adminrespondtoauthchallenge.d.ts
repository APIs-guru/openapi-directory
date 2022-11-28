import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AdminRespondToAuthChallengeXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAdminRespondToAuthChallenge = "AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge"
}
export declare class AdminRespondToAuthChallengeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminRespondToAuthChallengeXAmzTargetEnum;
}
export declare class AdminRespondToAuthChallengeRequest extends SpeakeasyBase {
    headers: AdminRespondToAuthChallengeHeaders;
    request: shared.AdminRespondToAuthChallengeRequest;
}
export declare class AdminRespondToAuthChallengeResponse extends SpeakeasyBase {
    adminRespondToAuthChallengeResponse?: shared.AdminRespondToAuthChallengeResponse;
    aliasExistsException?: any;
    codeMismatchException?: any;
    contentType: string;
    expiredCodeException?: any;
    internalErrorException?: any;
    invalidLambdaResponseException?: any;
    invalidParameterException?: any;
    invalidPasswordException?: any;
    invalidSmsRoleAccessPolicyException?: any;
    invalidSmsRoleTrustRelationshipException?: any;
    invalidUserPoolConfigurationException?: any;
    mfaMethodNotFoundException?: any;
    notAuthorizedException?: any;
    passwordResetRequiredException?: any;
    resourceNotFoundException?: any;
    softwareTokenMfaNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unexpectedLambdaException?: any;
    userLambdaValidationException?: any;
    userNotConfirmedException?: any;
    userNotFoundException?: any;
}
