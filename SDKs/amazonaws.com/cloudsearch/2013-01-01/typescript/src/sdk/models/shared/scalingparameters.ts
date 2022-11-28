import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PartitionInstanceTypeEnum } from "./partitioninstancetypeenum";



// ScalingParameters
/** 
 * The desired instance type and desired number of replicas of each index partition.
**/
export class ScalingParameters extends SpeakeasyBase {
  @SpeakeasyMetadata()
  desiredInstanceType?: PartitionInstanceTypeEnum;

  @SpeakeasyMetadata()
  desiredPartitionCount?: number;

  @SpeakeasyMetadata()
  desiredReplicationCount?: number;
}
