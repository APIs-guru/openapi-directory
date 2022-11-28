import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LaunchTemplateSpecification } from "./launchtemplatespecification";
import { LaunchTemplateOverrides } from "./launchtemplateoverrides";



// LaunchTemplate
/** 
 * <p>Describes a launch template and overrides. </p> <p>You specify these properties as part of a mixed instances policy. </p> <p>When you update the launch template or overrides in the <a>UpdateAutoScalingGroup</a> API call, existing Amazon EC2 instances continue to run. When scale out occurs, Amazon EC2 Auto Scaling launches instances to match the new settings. When scale in occurs, Amazon EC2 Auto Scaling terminates instances according to the group's termination policies.</p>
**/
export class LaunchTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  launchTemplateSpecification?: LaunchTemplateSpecification;

  @SpeakeasyMetadata({ elemType: LaunchTemplateOverrides })
  overrides?: LaunchTemplateOverrides[];
}
