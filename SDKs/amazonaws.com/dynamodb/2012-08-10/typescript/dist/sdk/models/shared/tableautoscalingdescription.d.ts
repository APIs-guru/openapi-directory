import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicaAutoScalingDescription } from "./replicaautoscalingdescription";
import { TableStatusEnum } from "./tablestatusenum";
/**
 * Represents the auto scaling configuration for a global table.
**/
export declare class TableAutoScalingDescription extends SpeakeasyBase {
    replicas?: ReplicaAutoScalingDescription[];
    tableName?: string;
    tableStatus?: TableStatusEnum;
}
