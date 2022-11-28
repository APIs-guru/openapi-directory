import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LaunchTemplateSpecification
/** 
 * <p>An object representing a launch template associated with a compute resource. You must specify either the launch template ID or launch template name in the request, but not both.</p> <p>If security groups are specified using both the <code>securityGroupIds</code> parameter of <code>CreateComputeEnvironment</code> and the launch template, the values in the <code>securityGroupIds</code> parameter of <code>CreateComputeEnvironment</code> will be used.</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources.</p> </note>
**/
export class LaunchTemplateSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=launchTemplateId" })
  launchTemplateId?: string;

  @SpeakeasyMetadata({ data: "json, name=launchTemplateName" })
  launchTemplateName?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
