import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingTargetTrackingScalingPolicyConfigurationDescription } from "./autoscalingtargettrackingscalingpolicyconfigurationdescription";



// AutoScalingPolicyDescription
/** 
 * Represents the properties of the scaling policy.
**/
export class AutoScalingPolicyDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PolicyName" })
  policyName?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetTrackingScalingPolicyConfiguration" })
  targetTrackingScalingPolicyConfiguration?: AutoScalingTargetTrackingScalingPolicyConfigurationDescription;
}
