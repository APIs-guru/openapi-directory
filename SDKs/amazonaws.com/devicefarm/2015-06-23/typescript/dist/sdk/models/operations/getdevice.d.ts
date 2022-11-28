import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDeviceXAmzTargetEnum {
    DeviceFarm20150623GetDevice = "DeviceFarm_20150623.GetDevice"
}
export declare class GetDeviceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDeviceXAmzTargetEnum;
}
export declare class GetDeviceRequest extends SpeakeasyBase {
    headers: GetDeviceHeaders;
    request: shared.GetDeviceRequest;
}
export declare class GetDeviceResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    getDeviceResult?: shared.GetDeviceResult;
    limitExceededException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
