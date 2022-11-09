import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReplicaAutoScalingDescription } from "./replicaautoscalingdescription";
import { TableStatusEnum } from "./tablestatusenum";


// TableAutoScalingDescription
/** 
 * Represents the auto scaling configuration for a global table.
**/
export class TableAutoScalingDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=Replicas", elemType: shared.ReplicaAutoScalingDescription })
  replicas?: ReplicaAutoScalingDescription[];

  @Metadata({ data: "json, name=TableName" })
  tableName?: string;

  @Metadata({ data: "json, name=TableStatus" })
  tableStatus?: TableStatusEnum;
}
