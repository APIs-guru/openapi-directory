import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListAuditMitigationActionsTasksTaskStatusEnum {
    InProgress = "IN_PROGRESS",
    Completed = "COMPLETED",
    Failed = "FAILED",
    Canceled = "CANCELED"
}
export declare class ListAuditMitigationActionsTasksQueryParams extends SpeakeasyBase {
    auditTaskId?: string;
    endTime: Date;
    findingId?: string;
    maxResults?: number;
    nextToken?: string;
    startTime: Date;
    taskStatus?: ListAuditMitigationActionsTasksTaskStatusEnum;
}
export declare class ListAuditMitigationActionsTasksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAuditMitigationActionsTasksRequest extends SpeakeasyBase {
    queryParams: ListAuditMitigationActionsTasksQueryParams;
    headers: ListAuditMitigationActionsTasksHeaders;
}
export declare class ListAuditMitigationActionsTasksResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listAuditMitigationActionsTasksResponse?: shared.ListAuditMitigationActionsTasksResponse;
    statusCode: number;
    throttlingException?: any;
}
