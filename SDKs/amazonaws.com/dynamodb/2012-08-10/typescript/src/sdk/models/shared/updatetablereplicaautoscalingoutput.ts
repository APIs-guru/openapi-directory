import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableAutoScalingDescription } from "./tableautoscalingdescription";



export class UpdateTableReplicaAutoScalingOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TableAutoScalingDescription" })
  tableAutoScalingDescription?: TableAutoScalingDescription;
}
