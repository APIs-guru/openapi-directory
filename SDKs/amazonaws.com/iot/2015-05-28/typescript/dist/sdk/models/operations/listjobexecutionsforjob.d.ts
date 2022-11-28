import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListJobExecutionsForJobPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare enum ListJobExecutionsForJobStatusEnum {
    Queued = "QUEUED",
    InProgress = "IN_PROGRESS",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    TimedOut = "TIMED_OUT",
    Rejected = "REJECTED",
    Removed = "REMOVED",
    Canceled = "CANCELED"
}
export declare class ListJobExecutionsForJobQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    status?: ListJobExecutionsForJobStatusEnum;
}
export declare class ListJobExecutionsForJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListJobExecutionsForJobRequest extends SpeakeasyBase {
    pathParams: ListJobExecutionsForJobPathParams;
    queryParams: ListJobExecutionsForJobQueryParams;
    headers: ListJobExecutionsForJobHeaders;
}
export declare class ListJobExecutionsForJobResponse extends SpeakeasyBase {
    contentType: string;
    invalidRequestException?: any;
    listJobExecutionsForJobResponse?: shared.ListJobExecutionsForJobResponse;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
