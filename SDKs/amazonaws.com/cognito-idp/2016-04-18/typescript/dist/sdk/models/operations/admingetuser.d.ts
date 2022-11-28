import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AdminGetUserXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAdminGetUser = "AWSCognitoIdentityProviderService.AdminGetUser"
}
export declare class AdminGetUserHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminGetUserXAmzTargetEnum;
}
export declare class AdminGetUserRequest extends SpeakeasyBase {
    headers: AdminGetUserHeaders;
    request: shared.AdminGetUserRequest;
}
export declare class AdminGetUserResponse extends SpeakeasyBase {
    adminGetUserResponse?: shared.AdminGetUserResponse;
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    userNotFoundException?: any;
}
