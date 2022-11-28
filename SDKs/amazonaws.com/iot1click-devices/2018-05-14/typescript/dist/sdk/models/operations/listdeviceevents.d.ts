import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDeviceEventsPathParams extends SpeakeasyBase {
    deviceId: string;
}
export declare class ListDeviceEventsQueryParams extends SpeakeasyBase {
    fromTimeStamp: Date;
    maxResults?: number;
    nextToken?: string;
    toTimeStamp: Date;
}
export declare class ListDeviceEventsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDeviceEventsRequest extends SpeakeasyBase {
    pathParams: ListDeviceEventsPathParams;
    queryParams: ListDeviceEventsQueryParams;
    headers: ListDeviceEventsHeaders;
}
export declare class ListDeviceEventsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listDeviceEventsResponse?: shared.ListDeviceEventsResponse;
    rangeNotSatisfiableException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
