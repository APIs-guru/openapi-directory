import { SpeakeasyBase } from "../../../internal/utils";
import { ScalingAction } from "./scalingaction";
import { ScalingTrigger } from "./scalingtrigger";
/**
 * A scale-in or scale-out rule that defines scaling activity, including the CloudWatch metric alarm that triggers activity, how EC2 instances are added or removed, and the periodicity of adjustments. The automatic scaling policy for an instance group can comprise one or more automatic scaling rules.
**/
export declare class ScalingRule extends SpeakeasyBase {
    action: ScalingAction;
    description?: string;
    name: string;
    trigger: ScalingTrigger;
}
