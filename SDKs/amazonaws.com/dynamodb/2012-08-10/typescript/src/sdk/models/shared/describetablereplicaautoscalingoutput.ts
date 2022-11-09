import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableAutoScalingDescription } from "./tableautoscalingdescription";


export class DescribeTableReplicaAutoScalingOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=TableAutoScalingDescription" })
  tableAutoScalingDescription?: TableAutoScalingDescription;
}
