import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDeviceInstanceXAmzTargetEnum {
    DeviceFarm20150623GetDeviceInstance = "DeviceFarm_20150623.GetDeviceInstance"
}
export declare class GetDeviceInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDeviceInstanceXAmzTargetEnum;
}
export declare class GetDeviceInstanceRequest extends SpeakeasyBase {
    headers: GetDeviceInstanceHeaders;
    request: shared.GetDeviceInstanceRequest;
}
export declare class GetDeviceInstanceResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    getDeviceInstanceResult?: shared.GetDeviceInstanceResult;
    limitExceededException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
