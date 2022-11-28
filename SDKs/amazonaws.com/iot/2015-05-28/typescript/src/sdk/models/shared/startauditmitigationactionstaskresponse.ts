import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartAuditMitigationActionsTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=taskId" })
  taskId?: string;
}
