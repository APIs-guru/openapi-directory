import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AdjustmentTypeEnum } from "./adjustmenttypeenum";


// SimpleScalingPolicyConfiguration
/** 
 * An automatic scaling configuration, which describes how the policy adds or removes instances, the cooldown period, and the number of EC2 instances that will be added each time the CloudWatch metric alarm condition is satisfied.
**/
export class SimpleScalingPolicyConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdjustmentType" })
  adjustmentType?: AdjustmentTypeEnum;

  @Metadata({ data: "json, name=CoolDown" })
  coolDown?: number;

  @Metadata({ data: "json, name=ScalingAdjustment" })
  scalingAdjustment: number;
}
