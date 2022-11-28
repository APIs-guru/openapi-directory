import { SpeakeasyBase } from "../../../internal/utils";
import { PartitionInstanceTypeEnum } from "./partitioninstancetypeenum";
/**
 * The desired instance type and desired number of replicas of each index partition.
**/
export declare class ScalingParameters extends SpeakeasyBase {
    desiredInstanceType?: PartitionInstanceTypeEnum;
    desiredPartitionCount?: number;
    desiredReplicationCount?: number;
}
