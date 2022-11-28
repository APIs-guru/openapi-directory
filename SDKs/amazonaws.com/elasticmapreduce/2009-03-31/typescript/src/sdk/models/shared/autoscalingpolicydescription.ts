import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScalingConstraints } from "./scalingconstraints";
import { ScalingRule } from "./scalingrule";
import { AutoScalingPolicyStatus } from "./autoscalingpolicystatus";



// AutoScalingPolicyDescription
/** 
 * An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. See <a>PutAutoScalingPolicy</a>.
**/
export class AutoScalingPolicyDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Constraints" })
  constraints?: ScalingConstraints;

  @SpeakeasyMetadata({ data: "json, name=Rules", elemType: ScalingRule })
  rules?: ScalingRule[];

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: AutoScalingPolicyStatus;
}
