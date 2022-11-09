import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuditMitigationActionsTaskMetadata } from "./auditmitigationactionstaskmetadata";


export class ListAuditMitigationActionsTasksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=tasks", elemType: shared.AuditMitigationActionsTaskMetadata })
  tasks?: AuditMitigationActionsTaskMetadata[];
}
