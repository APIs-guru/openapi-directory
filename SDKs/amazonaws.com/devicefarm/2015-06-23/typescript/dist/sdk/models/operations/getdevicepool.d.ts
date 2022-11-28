import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDevicePoolXAmzTargetEnum {
    DeviceFarm20150623GetDevicePool = "DeviceFarm_20150623.GetDevicePool"
}
export declare class GetDevicePoolHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDevicePoolXAmzTargetEnum;
}
export declare class GetDevicePoolRequest extends SpeakeasyBase {
    headers: GetDevicePoolHeaders;
    request: shared.GetDevicePoolRequest;
}
export declare class GetDevicePoolResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    getDevicePoolResult?: shared.GetDevicePoolResult;
    limitExceededException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
