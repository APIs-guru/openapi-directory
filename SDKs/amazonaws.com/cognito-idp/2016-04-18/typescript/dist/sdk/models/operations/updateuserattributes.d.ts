import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateUserAttributesXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceUpdateUserAttributes = "AWSCognitoIdentityProviderService.UpdateUserAttributes"
}
export declare class UpdateUserAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateUserAttributesXAmzTargetEnum;
}
export declare class UpdateUserAttributesRequest extends SpeakeasyBase {
    headers: UpdateUserAttributesHeaders;
    request: shared.UpdateUserAttributesRequest;
}
export declare class UpdateUserAttributesResponse extends SpeakeasyBase {
    aliasExistsException?: any;
    codeDeliveryFailureException?: any;
    codeMismatchException?: any;
    contentType: string;
    expiredCodeException?: any;
    internalErrorException?: any;
    invalidEmailRoleAccessPolicyException?: any;
    invalidLambdaResponseException?: any;
    invalidParameterException?: any;
    invalidSmsRoleAccessPolicyException?: any;
    invalidSmsRoleTrustRelationshipException?: any;
    notAuthorizedException?: any;
    passwordResetRequiredException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unexpectedLambdaException?: any;
    updateUserAttributesResponse?: shared.UpdateUserAttributesResponse;
    userLambdaValidationException?: any;
    userNotConfirmedException?: any;
    userNotFoundException?: any;
}
