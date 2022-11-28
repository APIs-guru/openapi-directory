import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstancesDistribution
/** 
 * <p>Describes an instances distribution for an Auto Scaling group with a <a>MixedInstancesPolicy</a>.</p> <p>The instances distribution specifies the distribution of On-Demand Instances and Spot Instances, the maximum price to pay for Spot Instances, and how the Auto Scaling group allocates instance types to fulfill On-Demand and Spot capacities.</p> <p>When you modify <code>SpotAllocationStrategy</code>, <code>SpotInstancePools</code>, or <code>SpotMaxPrice</code> in the <a>UpdateAutoScalingGroup</a> API call, this update action does not deploy any changes across the running Amazon EC2 instances in the group. Your existing Spot Instances continue to run as long as the maximum price for those instances is higher than the current Spot price. When scale out occurs, Amazon EC2 Auto Scaling launches instances based on the new settings. When scale in occurs, Amazon EC2 Auto Scaling terminates instances according to the group's termination policies.</p>
**/
export class InstancesDistribution extends SpeakeasyBase {
  @SpeakeasyMetadata()
  onDemandAllocationStrategy?: string;

  @SpeakeasyMetadata()
  onDemandBaseCapacity?: number;

  @SpeakeasyMetadata()
  onDemandPercentageAboveBaseCapacity?: number;

  @SpeakeasyMetadata()
  spotAllocationStrategy?: string;

  @SpeakeasyMetadata()
  spotInstancePools?: number;

  @SpeakeasyMetadata()
  spotMaxPrice?: string;
}
