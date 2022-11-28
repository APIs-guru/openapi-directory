import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ResendConfirmationCodeXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceResendConfirmationCode = "AWSCognitoIdentityProviderService.ResendConfirmationCode"
}
export declare class ResendConfirmationCodeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ResendConfirmationCodeXAmzTargetEnum;
}
export declare class ResendConfirmationCodeRequest extends SpeakeasyBase {
    headers: ResendConfirmationCodeHeaders;
    request: shared.ResendConfirmationCodeRequest;
}
export declare class ResendConfirmationCodeResponse extends SpeakeasyBase {
    codeDeliveryFailureException?: any;
    contentType: string;
    internalErrorException?: any;
    invalidEmailRoleAccessPolicyException?: any;
    invalidLambdaResponseException?: any;
    invalidParameterException?: any;
    invalidSmsRoleAccessPolicyException?: any;
    invalidSmsRoleTrustRelationshipException?: any;
    limitExceededException?: any;
    notAuthorizedException?: any;
    resendConfirmationCodeResponse?: shared.ResendConfirmationCodeResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unexpectedLambdaException?: any;
    userLambdaValidationException?: any;
    userNotFoundException?: any;
}
