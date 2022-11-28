import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateDeviceInstanceXAmzTargetEnum {
    DeviceFarm20150623UpdateDeviceInstance = "DeviceFarm_20150623.UpdateDeviceInstance"
}
export declare class UpdateDeviceInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDeviceInstanceXAmzTargetEnum;
}
export declare class UpdateDeviceInstanceRequest extends SpeakeasyBase {
    headers: UpdateDeviceInstanceHeaders;
    request: shared.UpdateDeviceInstanceRequest;
}
export declare class UpdateDeviceInstanceResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    limitExceededException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
    updateDeviceInstanceResult?: shared.UpdateDeviceInstanceResult;
}
