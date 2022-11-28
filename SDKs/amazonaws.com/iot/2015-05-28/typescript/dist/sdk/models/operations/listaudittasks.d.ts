import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListAuditTasksTaskStatusEnum {
    InProgress = "IN_PROGRESS",
    Completed = "COMPLETED",
    Failed = "FAILED",
    Canceled = "CANCELED"
}
export declare enum ListAuditTasksTaskTypeEnum {
    OnDemandAuditTask = "ON_DEMAND_AUDIT_TASK",
    ScheduledAuditTask = "SCHEDULED_AUDIT_TASK"
}
export declare class ListAuditTasksQueryParams extends SpeakeasyBase {
    endTime: Date;
    maxResults?: number;
    nextToken?: string;
    startTime: Date;
    taskStatus?: ListAuditTasksTaskStatusEnum;
    taskType?: ListAuditTasksTaskTypeEnum;
}
export declare class ListAuditTasksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAuditTasksRequest extends SpeakeasyBase {
    queryParams: ListAuditTasksQueryParams;
    headers: ListAuditTasksHeaders;
}
export declare class ListAuditTasksResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listAuditTasksResponse?: shared.ListAuditTasksResponse;
    statusCode: number;
    throttlingException?: any;
}
