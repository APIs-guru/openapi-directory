import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ManagedScalingStatusEnum } from "./managedscalingstatusenum";


// ManagedScaling
/** 
 * <p>The managed scaling settings for the Auto Scaling group capacity provider.</p> <p>When managed scaling is enabled, Amazon ECS manages the scale-in and scale-out actions of the Auto Scaling group. Amazon ECS manages a target tracking scaling policy using an Amazon ECS-managed CloudWatch metric with the specified <code>targetCapacity</code> value as the target value for the metric. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/asg-capacity-providers.html#asg-capacity-providers-managed-scaling">Using Managed Scaling</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>If managed scaling is disabled, the user must manage the scaling of the Auto Scaling group.</p>
**/
export class ManagedScaling extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceWarmupPeriod" })
  instanceWarmupPeriod?: number;

  @Metadata({ data: "json, name=maximumScalingStepSize" })
  maximumScalingStepSize?: number;

  @Metadata({ data: "json, name=minimumScalingStepSize" })
  minimumScalingStepSize?: number;

  @Metadata({ data: "json, name=status" })
  status?: ManagedScalingStatusEnum;

  @Metadata({ data: "json, name=targetCapacity" })
  targetCapacity?: number;
}
