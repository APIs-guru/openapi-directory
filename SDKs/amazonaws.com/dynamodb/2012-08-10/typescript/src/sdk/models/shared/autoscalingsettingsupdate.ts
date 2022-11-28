import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingPolicyUpdate } from "./autoscalingpolicyupdate";



// AutoScalingSettingsUpdate
/** 
 * Represents the auto scaling settings to be modified for a global table or global secondary index.
**/
export class AutoScalingSettingsUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoScalingDisabled" })
  autoScalingDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AutoScalingRoleArn" })
  autoScalingRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=MaximumUnits" })
  maximumUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=MinimumUnits" })
  minimumUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=ScalingPolicyUpdate" })
  scalingPolicyUpdate?: AutoScalingPolicyUpdate;
}
