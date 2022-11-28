import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListDeviceInstancesXAmzTargetEnum {
    DeviceFarm20150623ListDeviceInstances = "DeviceFarm_20150623.ListDeviceInstances"
}
export declare class ListDeviceInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDeviceInstancesXAmzTargetEnum;
}
export declare class ListDeviceInstancesRequest extends SpeakeasyBase {
    headers: ListDeviceInstancesHeaders;
    request: shared.ListDeviceInstancesRequest;
}
export declare class ListDeviceInstancesResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    limitExceededException?: any;
    listDeviceInstancesResult?: shared.ListDeviceInstancesResult;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
