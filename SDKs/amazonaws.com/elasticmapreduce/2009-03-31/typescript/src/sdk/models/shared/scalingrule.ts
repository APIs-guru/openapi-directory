import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ScalingAction } from "./scalingaction";
import { ScalingTrigger } from "./scalingtrigger";


// ScalingRule
/** 
 * A scale-in or scale-out rule that defines scaling activity, including the CloudWatch metric alarm that triggers activity, how EC2 instances are added or removed, and the periodicity of adjustments. The automatic scaling policy for an instance group can comprise one or more automatic scaling rules.
**/
export class ScalingRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=Action" })
  action: ScalingAction;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Trigger" })
  trigger: ScalingTrigger;
}
