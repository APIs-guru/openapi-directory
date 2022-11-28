import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDevicePoolsQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare enum ListDevicePoolsXAmzTargetEnum {
    DeviceFarm20150623ListDevicePools = "DeviceFarm_20150623.ListDevicePools"
}
export declare class ListDevicePoolsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDevicePoolsXAmzTargetEnum;
}
export declare class ListDevicePoolsRequest extends SpeakeasyBase {
    queryParams: ListDevicePoolsQueryParams;
    headers: ListDevicePoolsHeaders;
    request: shared.ListDevicePoolsRequest;
}
export declare class ListDevicePoolsResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    limitExceededException?: any;
    listDevicePoolsResult?: shared.ListDevicePoolsResult;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
