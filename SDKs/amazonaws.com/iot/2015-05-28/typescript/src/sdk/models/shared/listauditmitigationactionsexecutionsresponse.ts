import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuditMitigationActionExecutionMetadata } from "./auditmitigationactionexecutionmetadata";



export class ListAuditMitigationActionsExecutionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionsExecutions", elemType: AuditMitigationActionExecutionMetadata })
  actionsExecutions?: AuditMitigationActionExecutionMetadata[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
