import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListJobsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum ListJobsRequestBodyJobStatusEnum {
    Submitted = "SUBMITTED",
    Pending = "PENDING",
    Runnable = "RUNNABLE",
    Starting = "STARTING",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}
export declare class ListJobsRequestBody extends SpeakeasyBase {
    arrayJobId?: string;
    filters?: shared.KeyValuesPair[];
    jobQueue?: string;
    jobStatus?: ListJobsRequestBodyJobStatusEnum;
    maxResults?: number;
    multiNodeJobId?: string;
    nextToken?: string;
}
export declare class ListJobsRequest extends SpeakeasyBase {
    queryParams: ListJobsQueryParams;
    headers: ListJobsHeaders;
    request: ListJobsRequestBody;
}
export declare class ListJobsResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    listJobsResponse?: shared.ListJobsResponse;
    serverException?: any;
    statusCode: number;
}
