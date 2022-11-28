import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuditMitigationActionsTaskStatusEnum } from "./auditmitigationactionstaskstatusenum";



// AuditMitigationActionsTaskMetadata
/** 
 * Information about an audit mitigation actions task that is returned by <code>ListAuditMitigationActionsTasks</code>.
**/
export class AuditMitigationActionsTaskMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=taskId" })
  taskId?: string;

  @SpeakeasyMetadata({ data: "json, name=taskStatus" })
  taskStatus?: AuditMitigationActionsTaskStatusEnum;
}
