import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LaunchTemplateSpecification
/** 
 * <p> <b>This data type is used with the GameLift FleetIQ and game server groups.</b> </p> <p>An EC2 launch template that contains configuration settings and game server code to be deployed to all instances in a game server group. The launch template is specified when creating a new game server group with <a>CreateGameServerGroup</a>. </p>
**/
export class LaunchTemplateSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=LaunchTemplateId" })
  launchTemplateId?: string;

  @Metadata({ data: "json, name=LaunchTemplateName" })
  launchTemplateName?: string;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}
