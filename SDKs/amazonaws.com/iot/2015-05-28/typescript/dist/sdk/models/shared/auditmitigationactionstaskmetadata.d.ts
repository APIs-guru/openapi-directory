import { SpeakeasyBase } from "../../../internal/utils";
import { AuditMitigationActionsTaskStatusEnum } from "./auditmitigationactionstaskstatusenum";
/**
 * Information about an audit mitigation actions task that is returned by <code>ListAuditMitigationActionsTasks</code>.
**/
export declare class AuditMitigationActionsTaskMetadata extends SpeakeasyBase {
    startTime?: Date;
    taskId?: string;
    taskStatus?: AuditMitigationActionsTaskStatusEnum;
}
