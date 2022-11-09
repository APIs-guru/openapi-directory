import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BalancingStrategyEnum } from "./balancingstrategyenum";
import { GameServerProtectionPolicyEnum } from "./gameserverprotectionpolicyenum";
import { InstanceDefinition } from "./instancedefinition";
import { GameServerGroupStatusEnum } from "./gameservergroupstatusenum";
import { GameServerGroupActionEnum } from "./gameservergroupactionenum";


// GameServerGroup
/** 
 * <p> <b>This data type is used with the GameLift FleetIQ and game server groups.</b> </p> <p>Properties that describe a game server group resource. A game server group manages certain properties related to a corresponding EC2 Auto Scaling group. </p> <p>A game server group is created by a successful call to <code>CreateGameServerGroup</code> and deleted by calling <code>DeleteGameServerGroup</code>. Game server group activity can be temporarily suspended and resumed by calling <code>SuspendGameServerGroup</code> and <code>ResumeGameServerGroup</code>, respectively. </p> <p> <b>Related actions</b> </p> <p> <a>CreateGameServerGroup</a> | <a>ListGameServerGroups</a> | <a>DescribeGameServerGroup</a> | <a>UpdateGameServerGroup</a> | <a>DeleteGameServerGroup</a> | <a>ResumeGameServerGroup</a> | <a>SuspendGameServerGroup</a> | <a>DescribeGameServerInstances</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/reference-awssdk-fleetiq.html">All APIs by task</a> </p>
**/
export class GameServerGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoScalingGroupArn" })
  autoScalingGroupArn?: string;

  @Metadata({ data: "json, name=BalancingStrategy" })
  balancingStrategy?: BalancingStrategyEnum;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=GameServerGroupArn" })
  gameServerGroupArn?: string;

  @Metadata({ data: "json, name=GameServerGroupName" })
  gameServerGroupName?: string;

  @Metadata({ data: "json, name=GameServerProtectionPolicy" })
  gameServerProtectionPolicy?: GameServerProtectionPolicyEnum;

  @Metadata({ data: "json, name=InstanceDefinitions", elemType: shared.InstanceDefinition })
  instanceDefinitions?: InstanceDefinition[];

  @Metadata({ data: "json, name=LastUpdatedTime" })
  lastUpdatedTime?: Date;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=Status" })
  status?: GameServerGroupStatusEnum;

  @Metadata({ data: "json, name=StatusReason" })
  statusReason?: string;

  @Metadata({ data: "json, name=SuspendedActions" })
  suspendedActions?: GameServerGroupActionEnum[];
}
