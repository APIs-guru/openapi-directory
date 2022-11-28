import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FleetLaunchTemplateSpecification
/** 
 * Describes the Amazon EC2 launch template and the launch template version that can be used by a Spot Fleet request to configure Amazon EC2 instances. For information about launch templates, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">Launching an instance from a launch template</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.
**/
export class FleetLaunchTemplateSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata()
  launchTemplateId?: string;

  @SpeakeasyMetadata()
  launchTemplateName?: string;

  @SpeakeasyMetadata()
  version?: string;
}
