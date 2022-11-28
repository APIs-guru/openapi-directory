import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateDevicePoolXAmzTargetEnum {
    DeviceFarm20150623UpdateDevicePool = "DeviceFarm_20150623.UpdateDevicePool"
}
export declare class UpdateDevicePoolHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDevicePoolXAmzTargetEnum;
}
export declare class UpdateDevicePoolRequest extends SpeakeasyBase {
    headers: UpdateDevicePoolHeaders;
    request: shared.UpdateDevicePoolRequest;
}
export declare class UpdateDevicePoolResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    limitExceededException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
    updateDevicePoolResult?: shared.UpdateDevicePoolResult;
}
