import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoScalingPolicyUpdate } from "./autoscalingpolicyupdate";


// AutoScalingSettingsUpdate
/** 
 * Represents the auto scaling settings to be modified for a global table or global secondary index.
**/
export class AutoScalingSettingsUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoScalingDisabled" })
  autoScalingDisabled?: boolean;

  @Metadata({ data: "json, name=AutoScalingRoleArn" })
  autoScalingRoleArn?: string;

  @Metadata({ data: "json, name=MaximumUnits" })
  maximumUnits?: number;

  @Metadata({ data: "json, name=MinimumUnits" })
  minimumUnits?: number;

  @Metadata({ data: "json, name=ScalingPolicyUpdate" })
  scalingPolicyUpdate?: AutoScalingPolicyUpdate;
}
