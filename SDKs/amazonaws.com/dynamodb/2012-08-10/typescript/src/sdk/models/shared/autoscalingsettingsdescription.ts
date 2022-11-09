import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AutoScalingPolicyDescription } from "./autoscalingpolicydescription";


// AutoScalingSettingsDescription
/** 
 * Represents the auto scaling settings for a global table or global secondary index.
**/
export class AutoScalingSettingsDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoScalingDisabled" })
  autoScalingDisabled?: boolean;

  @Metadata({ data: "json, name=AutoScalingRoleArn" })
  autoScalingRoleArn?: string;

  @Metadata({ data: "json, name=MaximumUnits" })
  maximumUnits?: number;

  @Metadata({ data: "json, name=MinimumUnits" })
  minimumUnits?: number;

  @Metadata({ data: "json, name=ScalingPolicies", elemType: shared.AutoScalingPolicyDescription })
  scalingPolicies?: AutoScalingPolicyDescription[];
}
