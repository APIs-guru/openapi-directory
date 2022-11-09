import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuditMitigationActionsTaskStatusEnum } from "./auditmitigationactionstaskstatusenum";


// AuditMitigationActionsTaskMetadata
/** 
 * Information about an audit mitigation actions task that is returned by <code>ListAuditMitigationActionsTasks</code>.
**/
export class AuditMitigationActionsTaskMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=startTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=taskId" })
  taskId?: string;

  @Metadata({ data: "json, name=taskStatus" })
  taskStatus?: AuditMitigationActionsTaskStatusEnum;
}
