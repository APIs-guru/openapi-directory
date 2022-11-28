import { SpeakeasyBase } from "../../../internal/utils";
import { AuditMitigationActionsTaskMetadata } from "./auditmitigationactionstaskmetadata";
export declare class ListAuditMitigationActionsTasksResponse extends SpeakeasyBase {
    nextToken?: string;
    tasks?: AuditMitigationActionsTaskMetadata[];
}
