import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum EnableUserXAmzTargetEnum {
    PhotonAdminProxyServiceEnableUser = "PhotonAdminProxyService.EnableUser"
}
export declare class EnableUserHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EnableUserXAmzTargetEnum;
}
export declare class EnableUserRequest extends SpeakeasyBase {
    headers: EnableUserHeaders;
    request: shared.EnableUserRequest;
}
export declare class EnableUserResponse extends SpeakeasyBase {
    contentType: string;
    enableUserResult?: Map<string, any>;
    invalidAccountStatusException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
