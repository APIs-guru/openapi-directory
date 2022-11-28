import { SpeakeasyBase } from "../../../internal/utils";
import { AuditMitigationActionsExecutionStatusEnum } from "./auditmitigationactionsexecutionstatusenum";
/**
 * Returned by ListAuditMitigationActionsTask, this object contains information that describes a mitigation action that has been started.
**/
export declare class AuditMitigationActionExecutionMetadata extends SpeakeasyBase {
    actionId?: string;
    actionName?: string;
    endTime?: Date;
    errorCode?: string;
    findingId?: string;
    message?: string;
    startTime?: Date;
    status?: AuditMitigationActionsExecutionStatusEnum;
    taskId?: string;
}
