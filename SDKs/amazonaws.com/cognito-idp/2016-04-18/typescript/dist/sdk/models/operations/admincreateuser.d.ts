import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AdminCreateUserXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAdminCreateUser = "AWSCognitoIdentityProviderService.AdminCreateUser"
}
export declare class AdminCreateUserHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminCreateUserXAmzTargetEnum;
}
export declare class AdminCreateUserRequest extends SpeakeasyBase {
    headers: AdminCreateUserHeaders;
    request: shared.AdminCreateUserRequest;
}
export declare class AdminCreateUserResponse extends SpeakeasyBase {
    adminCreateUserResponse?: shared.AdminCreateUserResponse;
    codeDeliveryFailureException?: any;
    contentType: string;
    internalErrorException?: any;
    invalidLambdaResponseException?: any;
    invalidParameterException?: any;
    invalidPasswordException?: any;
    invalidSmsRoleAccessPolicyException?: any;
    invalidSmsRoleTrustRelationshipException?: any;
    notAuthorizedException?: any;
    preconditionNotMetException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unexpectedLambdaException?: any;
    unsupportedUserStateException?: any;
    userLambdaValidationException?: any;
    userNotFoundException?: any;
    usernameExistsException?: any;
}
