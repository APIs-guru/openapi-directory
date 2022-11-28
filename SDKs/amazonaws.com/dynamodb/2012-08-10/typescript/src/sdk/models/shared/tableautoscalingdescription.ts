import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicaAutoScalingDescription } from "./replicaautoscalingdescription";
import { TableStatusEnum } from "./tablestatusenum";



// TableAutoScalingDescription
/** 
 * Represents the auto scaling configuration for a global table.
**/
export class TableAutoScalingDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Replicas", elemType: ReplicaAutoScalingDescription })
  replicas?: ReplicaAutoScalingDescription[];

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName?: string;

  @SpeakeasyMetadata({ data: "json, name=TableStatus" })
  tableStatus?: TableStatusEnum;
}
