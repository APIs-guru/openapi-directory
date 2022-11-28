import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingTargetTrackingScalingPolicyConfigurationUpdate } from "./autoscalingtargettrackingscalingpolicyconfigurationupdate";



// AutoScalingPolicyUpdate
/** 
 * Represents the auto scaling policy to be modified.
**/
export class AutoScalingPolicyUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PolicyName" })
  policyName?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetTrackingScalingPolicyConfiguration" })
  targetTrackingScalingPolicyConfiguration: AutoScalingTargetTrackingScalingPolicyConfigurationUpdate;
}
