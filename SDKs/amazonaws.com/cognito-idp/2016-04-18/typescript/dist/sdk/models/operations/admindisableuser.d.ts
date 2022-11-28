import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AdminDisableUserXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAdminDisableUser = "AWSCognitoIdentityProviderService.AdminDisableUser"
}
export declare class AdminDisableUserHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminDisableUserXAmzTargetEnum;
}
export declare class AdminDisableUserRequest extends SpeakeasyBase {
    headers: AdminDisableUserHeaders;
    request: shared.AdminDisableUserRequest;
}
export declare class AdminDisableUserResponse extends SpeakeasyBase {
    adminDisableUserResponse?: Map<string, any>;
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    userNotFoundException?: any;
}
