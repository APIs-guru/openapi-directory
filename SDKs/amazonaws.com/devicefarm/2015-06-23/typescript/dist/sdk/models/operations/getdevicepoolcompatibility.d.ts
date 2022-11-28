import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDevicePoolCompatibilityXAmzTargetEnum {
    DeviceFarm20150623GetDevicePoolCompatibility = "DeviceFarm_20150623.GetDevicePoolCompatibility"
}
export declare class GetDevicePoolCompatibilityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDevicePoolCompatibilityXAmzTargetEnum;
}
export declare class GetDevicePoolCompatibilityRequest extends SpeakeasyBase {
    headers: GetDevicePoolCompatibilityHeaders;
    request: shared.GetDevicePoolCompatibilityRequest;
}
export declare class GetDevicePoolCompatibilityResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    getDevicePoolCompatibilityResult?: shared.GetDevicePoolCompatibilityResult;
    limitExceededException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
