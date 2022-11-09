import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LaunchPermissionConfiguration
/** 
 * Describes the configuration for a launch permission. The launch permission modification request is sent to the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html">Amazon EC2 ModifyImageAttribute</a> API on behalf of the user for each Region they have selected to distribute the AMI. To make an AMI public, set the launch permission authorized accounts to <code>all</code>. See the examples for making an AMI public at <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html">Amazon EC2 ModifyImageAttribute</a>.
**/
export class LaunchPermissionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=userGroups" })
  userGroups?: string[];

  @Metadata({ data: "json, name=userIds" })
  userIds?: string[];
}
