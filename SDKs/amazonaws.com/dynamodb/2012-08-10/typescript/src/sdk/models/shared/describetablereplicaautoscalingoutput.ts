import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableAutoScalingDescription } from "./tableautoscalingdescription";



export class DescribeTableReplicaAutoScalingOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TableAutoScalingDescription" })
  tableAutoScalingDescription?: TableAutoScalingDescription;
}
