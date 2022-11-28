import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AdminUserGlobalSignOutXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAdminUserGlobalSignOut = "AWSCognitoIdentityProviderService.AdminUserGlobalSignOut"
}
export declare class AdminUserGlobalSignOutHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminUserGlobalSignOutXAmzTargetEnum;
}
export declare class AdminUserGlobalSignOutRequest extends SpeakeasyBase {
    headers: AdminUserGlobalSignOutHeaders;
    request: shared.AdminUserGlobalSignOutRequest;
}
export declare class AdminUserGlobalSignOutResponse extends SpeakeasyBase {
    adminUserGlobalSignOutResponse?: Map<string, any>;
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    userNotFoundException?: any;
}
