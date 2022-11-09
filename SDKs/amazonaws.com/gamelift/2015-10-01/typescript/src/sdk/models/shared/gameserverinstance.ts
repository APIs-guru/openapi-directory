import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GameServerInstanceStatusEnum } from "./gameserverinstancestatusenum";


// GameServerInstance
/** 
 * <p> <b>This data type is used with the GameLift FleetIQ and game server groups.</b> </p> <p> Additional properties, including status, that describe an EC2 instance in a game server group. Instance configurations are set with game server group properties (see <code>DescribeGameServerGroup</code> and with the EC2 launch template that was used when creating the game server group. </p> <p>Retrieve game server instances for a game server group by calling <code>DescribeGameServerInstances</code>. </p> <p> <b>Related actions</b> </p> <p> <a>CreateGameServerGroup</a> | <a>ListGameServerGroups</a> | <a>DescribeGameServerGroup</a> | <a>UpdateGameServerGroup</a> | <a>DeleteGameServerGroup</a> | <a>ResumeGameServerGroup</a> | <a>SuspendGameServerGroup</a> | <a>DescribeGameServerInstances</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/reference-awssdk-fleetiq.html">All APIs by task</a> </p>
**/
export class GameServerInstance extends SpeakeasyBase {
  @Metadata({ data: "json, name=GameServerGroupArn" })
  gameServerGroupArn?: string;

  @Metadata({ data: "json, name=GameServerGroupName" })
  gameServerGroupName?: string;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=InstanceStatus" })
  instanceStatus?: GameServerInstanceStatusEnum;
}
