import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListAuditMitigationActionsExecutionsActionStatusEnum {
    InProgress = "IN_PROGRESS",
    Completed = "COMPLETED",
    Failed = "FAILED",
    Canceled = "CANCELED",
    Skipped = "SKIPPED",
    Pending = "PENDING"
}
export declare class ListAuditMitigationActionsExecutionsQueryParams extends SpeakeasyBase {
    actionStatus?: ListAuditMitigationActionsExecutionsActionStatusEnum;
    findingId: string;
    maxResults?: number;
    nextToken?: string;
    taskId: string;
}
export declare class ListAuditMitigationActionsExecutionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAuditMitigationActionsExecutionsRequest extends SpeakeasyBase {
    queryParams: ListAuditMitigationActionsExecutionsQueryParams;
    headers: ListAuditMitigationActionsExecutionsHeaders;
}
export declare class ListAuditMitigationActionsExecutionsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listAuditMitigationActionsExecutionsResponse?: shared.ListAuditMitigationActionsExecutionsResponse;
    statusCode: number;
    throttlingException?: any;
}
