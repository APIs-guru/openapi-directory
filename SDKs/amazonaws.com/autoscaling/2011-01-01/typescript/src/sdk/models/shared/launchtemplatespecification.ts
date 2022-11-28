import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LaunchTemplateSpecification
/** 
 * Describes the launch template and the version of the launch template that Amazon EC2 Auto Scaling uses to launch Amazon EC2 instances. For more information about launch templates, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/LaunchTemplates.html">Launch templates</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
**/
export class LaunchTemplateSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata()
  launchTemplateId?: string;

  @SpeakeasyMetadata()
  launchTemplateName?: string;

  @SpeakeasyMetadata()
  version?: string;
}
