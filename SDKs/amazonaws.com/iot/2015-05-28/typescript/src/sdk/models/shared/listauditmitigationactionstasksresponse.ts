import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuditMitigationActionsTaskMetadata } from "./auditmitigationactionstaskmetadata";



export class ListAuditMitigationActionsTasksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tasks", elemType: AuditMitigationActionsTaskMetadata })
  tasks?: AuditMitigationActionsTaskMetadata[];
}
