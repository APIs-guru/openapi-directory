import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DisableUserXAmzTargetEnum {
    PhotonAdminProxyServiceDisableUser = "PhotonAdminProxyService.DisableUser"
}
export declare class DisableUserHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisableUserXAmzTargetEnum;
}
export declare class DisableUserRequest extends SpeakeasyBase {
    headers: DisableUserHeaders;
    request: shared.DisableUserRequest;
}
export declare class DisableUserResponse extends SpeakeasyBase {
    contentType: string;
    disableUserResult?: Map<string, any>;
    resourceNotFoundException?: any;
    statusCode: number;
}
