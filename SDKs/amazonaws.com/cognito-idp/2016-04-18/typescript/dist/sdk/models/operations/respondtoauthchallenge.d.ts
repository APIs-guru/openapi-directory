import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RespondToAuthChallengeXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceRespondToAuthChallenge = "AWSCognitoIdentityProviderService.RespondToAuthChallenge"
}
export declare class RespondToAuthChallengeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RespondToAuthChallengeXAmzTargetEnum;
}
export declare class RespondToAuthChallengeRequest extends SpeakeasyBase {
    headers: RespondToAuthChallengeHeaders;
    request: shared.RespondToAuthChallengeRequest;
}
export declare class RespondToAuthChallengeResponse extends SpeakeasyBase {
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
    respondToAuthChallengeResponse?: shared.RespondToAuthChallengeResponse;
    softwareTokenMfaNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unexpectedLambdaException?: any;
    userLambdaValidationException?: any;
    userNotConfirmedException?: any;
    userNotFoundException?: any;
}
