import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteUserXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceDeleteUser = "AWSCognitoIdentityProviderService.DeleteUser"
}
export declare class DeleteUserHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteUserXAmzTargetEnum;
}
export declare class DeleteUserRequest extends SpeakeasyBase {
    headers: DeleteUserHeaders;
    request: shared.DeleteUserRequest;
}
export declare class DeleteUserResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    passwordResetRequiredException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    userNotConfirmedException?: any;
    userNotFoundException?: any;
}
