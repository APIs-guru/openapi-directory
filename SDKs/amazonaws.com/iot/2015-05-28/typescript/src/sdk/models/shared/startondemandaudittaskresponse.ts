import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartOnDemandAuditTaskResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=taskId" })
  taskId?: string;
}
