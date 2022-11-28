import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetUserXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceGetUser = "AWSCognitoIdentityProviderService.GetUser"
}
export declare class GetUserHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetUserXAmzTargetEnum;
}
export declare class GetUserRequest extends SpeakeasyBase {
    headers: GetUserHeaders;
    request: shared.GetUserRequest;
}
export declare class GetUserResponse extends SpeakeasyBase {
    contentType: string;
    getUserResponse?: shared.GetUserResponse;
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
