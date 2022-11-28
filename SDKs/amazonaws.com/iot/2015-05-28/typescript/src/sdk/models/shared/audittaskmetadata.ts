import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuditTaskStatusEnum } from "./audittaskstatusenum";
import { AuditTaskTypeEnum } from "./audittasktypeenum";



// AuditTaskMetadata
/** 
 * The audits that were performed.
**/
export class AuditTaskMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=taskId" })
  taskId?: string;

  @SpeakeasyMetadata({ data: "json, name=taskStatus" })
  taskStatus?: AuditTaskStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=taskType" })
  taskType?: AuditTaskTypeEnum;
}
