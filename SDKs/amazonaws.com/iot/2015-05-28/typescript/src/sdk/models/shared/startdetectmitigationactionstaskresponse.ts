import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartDetectMitigationActionsTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=taskId" })
  taskId?: string;
}
