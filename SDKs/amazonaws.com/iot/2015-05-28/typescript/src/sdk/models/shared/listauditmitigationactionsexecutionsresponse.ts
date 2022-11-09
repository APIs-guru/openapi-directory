import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuditMitigationActionExecutionMetadata } from "./auditmitigationactionexecutionmetadata";


export class ListAuditMitigationActionsExecutionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionsExecutions", elemType: shared.AuditMitigationActionExecutionMetadata })
  actionsExecutions?: AuditMitigationActionExecutionMetadata[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
