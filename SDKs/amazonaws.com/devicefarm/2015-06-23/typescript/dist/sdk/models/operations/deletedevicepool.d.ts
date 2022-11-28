import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteDevicePoolXAmzTargetEnum {
    DeviceFarm20150623DeleteDevicePool = "DeviceFarm_20150623.DeleteDevicePool"
}
export declare class DeleteDevicePoolHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDevicePoolXAmzTargetEnum;
}
export declare class DeleteDevicePoolRequest extends SpeakeasyBase {
    headers: DeleteDevicePoolHeaders;
    request: shared.DeleteDevicePoolRequest;
}
export declare class DeleteDevicePoolResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    deleteDevicePoolResult?: Map<string, any>;
    limitExceededException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
