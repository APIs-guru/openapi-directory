import { SpeakeasyBase } from "../../../internal/utils";
import { AuditMitigationActionExecutionMetadata } from "./auditmitigationactionexecutionmetadata";
export declare class ListAuditMitigationActionsExecutionsResponse extends SpeakeasyBase {
    actionsExecutions?: AuditMitigationActionExecutionMetadata[];
    nextToken?: string;
}
