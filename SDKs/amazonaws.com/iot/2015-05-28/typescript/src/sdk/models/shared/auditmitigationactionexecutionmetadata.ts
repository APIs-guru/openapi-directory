import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuditMitigationActionsExecutionStatusEnum } from "./auditmitigationactionsexecutionstatusenum";



// AuditMitigationActionExecutionMetadata
/** 
 * Returned by ListAuditMitigationActionsTask, this object contains information that describes a mitigation action that has been started.
**/
export class AuditMitigationActionExecutionMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionId" })
  actionId?: string;

  @SpeakeasyMetadata({ data: "json, name=actionName" })
  actionName?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=findingId" })
  findingId?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AuditMitigationActionsExecutionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=taskId" })
  taskId?: string;
}
