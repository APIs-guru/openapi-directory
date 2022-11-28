import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingPolicyDescription } from "./autoscalingpolicydescription";



// AutoScalingSettingsDescription
/** 
 * Represents the auto scaling settings for a global table or global secondary index.
**/
export class AutoScalingSettingsDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoScalingDisabled" })
  autoScalingDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AutoScalingRoleArn" })
  autoScalingRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=MaximumUnits" })
  maximumUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=MinimumUnits" })
  minimumUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=ScalingPolicies", elemType: AutoScalingPolicyDescription })
  scalingPolicies?: AutoScalingPolicyDescription[];
}
