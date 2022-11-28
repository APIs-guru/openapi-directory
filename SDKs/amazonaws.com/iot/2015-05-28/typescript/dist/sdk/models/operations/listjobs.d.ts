import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListJobsStatusEnum {
    InProgress = "IN_PROGRESS",
    Canceled = "CANCELED",
    Completed = "COMPLETED",
    DeletionInProgress = "DELETION_IN_PROGRESS"
}
export declare enum ListJobsTargetSelectionEnum {
    Continuous = "CONTINUOUS",
    Snapshot = "SNAPSHOT"
}
export declare class ListJobsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    namespaceId?: string;
    nextToken?: string;
    status?: ListJobsStatusEnum;
    targetSelection?: ListJobsTargetSelectionEnum;
    thingGroupId?: string;
    thingGroupName?: string;
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
export declare class ListJobsRequest extends SpeakeasyBase {
    queryParams: ListJobsQueryParams;
    headers: ListJobsHeaders;
}
export declare class ListJobsResponse extends SpeakeasyBase {
    contentType: string;
    invalidRequestException?: any;
    listJobsResponse?: shared.ListJobsResponse;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
