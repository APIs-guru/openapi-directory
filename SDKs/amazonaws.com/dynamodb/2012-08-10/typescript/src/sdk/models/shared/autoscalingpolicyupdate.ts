import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoScalingTargetTrackingScalingPolicyConfigurationUpdate } from "./autoscalingtargettrackingscalingpolicyconfigurationupdate";


// AutoScalingPolicyUpdate
/** 
 * Represents the auto scaling policy to be modified.
**/
export class AutoScalingPolicyUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=PolicyName" })
  policyName?: string;

  @Metadata({ data: "json, name=TargetTrackingScalingPolicyConfiguration" })
  targetTrackingScalingPolicyConfiguration: AutoScalingTargetTrackingScalingPolicyConfigurationUpdate;
}
