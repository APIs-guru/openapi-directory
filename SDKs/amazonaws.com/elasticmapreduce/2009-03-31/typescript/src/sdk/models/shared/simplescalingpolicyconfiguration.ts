import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdjustmentTypeEnum } from "./adjustmenttypeenum";



// SimpleScalingPolicyConfiguration
/** 
 * An automatic scaling configuration, which describes how the policy adds or removes instances, the cooldown period, and the number of EC2 instances that will be added each time the CloudWatch metric alarm condition is satisfied.
**/
export class SimpleScalingPolicyConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdjustmentType" })
  adjustmentType?: AdjustmentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=CoolDown" })
  coolDown?: number;

  @SpeakeasyMetadata({ data: "json, name=ScalingAdjustment" })
  scalingAdjustment: number;
}
