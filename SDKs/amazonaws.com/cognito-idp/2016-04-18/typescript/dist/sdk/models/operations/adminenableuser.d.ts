import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AdminEnableUserXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAdminEnableUser = "AWSCognitoIdentityProviderService.AdminEnableUser"
}
export declare class AdminEnableUserHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminEnableUserXAmzTargetEnum;
}
export declare class AdminEnableUserRequest extends SpeakeasyBase {
    headers: AdminEnableUserHeaders;
    request: shared.AdminEnableUserRequest;
}
export declare class AdminEnableUserResponse extends SpeakeasyBase {
    adminEnableUserResponse?: Map<string, any>;
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    userNotFoundException?: any;
}
