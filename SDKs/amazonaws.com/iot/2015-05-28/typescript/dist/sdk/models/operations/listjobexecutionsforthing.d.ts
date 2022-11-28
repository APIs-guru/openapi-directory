import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListJobExecutionsForThingPathParams extends SpeakeasyBase {
    thingName: string;
}
export declare enum ListJobExecutionsForThingStatusEnum {
    Queued = "QUEUED",
    InProgress = "IN_PROGRESS",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    TimedOut = "TIMED_OUT",
    Rejected = "REJECTED",
    Removed = "REMOVED",
    Canceled = "CANCELED"
}
export declare class ListJobExecutionsForThingQueryParams extends SpeakeasyBase {
    maxResults?: number;
    namespaceId?: string;
    nextToken?: string;
    status?: ListJobExecutionsForThingStatusEnum;
}
export declare class ListJobExecutionsForThingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListJobExecutionsForThingRequest extends SpeakeasyBase {
    pathParams: ListJobExecutionsForThingPathParams;
    queryParams: ListJobExecutionsForThingQueryParams;
    headers: ListJobExecutionsForThingHeaders;
}
export declare class ListJobExecutionsForThingResponse extends SpeakeasyBase {
    contentType: string;
    invalidRequestException?: any;
    listJobExecutionsForThingResponse?: shared.ListJobExecutionsForThingResponse;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
