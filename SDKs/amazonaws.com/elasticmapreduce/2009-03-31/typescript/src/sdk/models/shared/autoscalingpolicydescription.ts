import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ScalingConstraints } from "./scalingconstraints";
import { ScalingRule } from "./scalingrule";
import { AutoScalingPolicyStatus } from "./autoscalingpolicystatus";


// AutoScalingPolicyDescription
/** 
 * An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. See <a>PutAutoScalingPolicy</a>.
**/
export class AutoScalingPolicyDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=Constraints" })
  constraints?: ScalingConstraints;

  @Metadata({ data: "json, name=Rules", elemType: shared.ScalingRule })
  rules?: ScalingRule[];

  @Metadata({ data: "json, name=Status" })
  status?: AutoScalingPolicyStatus;
}
