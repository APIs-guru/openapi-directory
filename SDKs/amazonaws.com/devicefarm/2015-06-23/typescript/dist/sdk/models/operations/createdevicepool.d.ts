import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateDevicePoolXAmzTargetEnum {
    DeviceFarm20150623CreateDevicePool = "DeviceFarm_20150623.CreateDevicePool"
}
export declare class CreateDevicePoolHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDevicePoolXAmzTargetEnum;
}
export declare class CreateDevicePoolRequest extends SpeakeasyBase {
    headers: CreateDevicePoolHeaders;
    request: shared.CreateDevicePoolRequest;
}
export declare class CreateDevicePoolResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    createDevicePoolResult?: shared.CreateDevicePoolResult;
    limitExceededException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
