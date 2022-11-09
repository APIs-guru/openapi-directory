import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoScalingTargetTrackingScalingPolicyConfigurationDescription } from "./autoscalingtargettrackingscalingpolicyconfigurationdescription";


// AutoScalingPolicyDescription
/** 
 * Represents the properties of the scaling policy.
**/
export class AutoScalingPolicyDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=PolicyName" })
  policyName?: string;

  @Metadata({ data: "json, name=TargetTrackingScalingPolicyConfiguration" })
  targetTrackingScalingPolicyConfiguration?: AutoScalingTargetTrackingScalingPolicyConfigurationDescription;
}
