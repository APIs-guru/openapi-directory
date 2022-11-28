import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartOnDemandAuditTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=taskId" })
  taskId?: string;
}
