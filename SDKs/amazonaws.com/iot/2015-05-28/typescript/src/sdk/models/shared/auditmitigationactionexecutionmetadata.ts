import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuditMitigationActionsExecutionStatusEnum } from "./auditmitigationactionsexecutionstatusenum";


// AuditMitigationActionExecutionMetadata
/** 
 * Returned by ListAuditMitigationActionsTask, this object contains information that describes a mitigation action that has been started.
**/
export class AuditMitigationActionExecutionMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionId" })
  actionId?: string;

  @Metadata({ data: "json, name=actionName" })
  actionName?: string;

  @Metadata({ data: "json, name=endTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=findingId" })
  findingId?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=status" })
  status?: AuditMitigationActionsExecutionStatusEnum;

  @Metadata({ data: "json, name=taskId" })
  taskId?: string;
}
