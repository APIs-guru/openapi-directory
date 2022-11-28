import { SpeakeasyBase } from "../../../internal/utils";
import { AuditTaskStatusEnum } from "./audittaskstatusenum";
import { AuditTaskTypeEnum } from "./audittasktypeenum";
/**
 * The audits that were performed.
**/
export declare class AuditTaskMetadata extends SpeakeasyBase {
    taskId?: string;
    taskStatus?: AuditTaskStatusEnum;
    taskType?: AuditTaskTypeEnum;
}
