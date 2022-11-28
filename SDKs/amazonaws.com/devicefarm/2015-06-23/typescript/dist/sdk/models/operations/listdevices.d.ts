import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDevicesQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare enum ListDevicesXAmzTargetEnum {
    DeviceFarm20150623ListDevices = "DeviceFarm_20150623.ListDevices"
}
export declare class ListDevicesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDevicesXAmzTargetEnum;
}
export declare class ListDevicesRequest extends SpeakeasyBase {
    queryParams: ListDevicesQueryParams;
    headers: ListDevicesHeaders;
    request: shared.ListDevicesRequest;
}
export declare class ListDevicesResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    limitExceededException?: any;
    listDevicesResult?: shared.ListDevicesResult;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
