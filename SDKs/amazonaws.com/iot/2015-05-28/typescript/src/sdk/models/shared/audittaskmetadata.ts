import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuditTaskStatusEnum } from "./audittaskstatusenum";
import { AuditTaskTypeEnum } from "./audittasktypeenum";


// AuditTaskMetadata
/** 
 * The audits that were performed.
**/
export class AuditTaskMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=taskId" })
  taskId?: string;

  @Metadata({ data: "json, name=taskStatus" })
  taskStatus?: AuditTaskStatusEnum;

  @Metadata({ data: "json, name=taskType" })
  taskType?: AuditTaskTypeEnum;
}
