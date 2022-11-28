import { SpeakeasyBase } from "../../../internal/utils";
import { BalancingStrategyEnum } from "./balancingstrategyenum";
import { GameServerProtectionPolicyEnum } from "./gameserverprotectionpolicyenum";
import { InstanceDefinition } from "./instancedefinition";
import { GameServerGroupStatusEnum } from "./gameservergroupstatusenum";
import { GameServerGroupActionEnum } from "./gameservergroupactionenum";
/**
 * <p> <b>This data type is used with the GameLift FleetIQ and game server groups.</b> </p> <p>Properties that describe a game server group resource. A game server group manages certain properties related to a corresponding EC2 Auto Scaling group. </p> <p>A game server group is created by a successful call to <code>CreateGameServerGroup</code> and deleted by calling <code>DeleteGameServerGroup</code>. Game server group activity can be temporarily suspended and resumed by calling <code>SuspendGameServerGroup</code> and <code>ResumeGameServerGroup</code>, respectively. </p> <p> <b>Related actions</b> </p> <p> <a>CreateGameServerGroup</a> | <a>ListGameServerGroups</a> | <a>DescribeGameServerGroup</a> | <a>UpdateGameServerGroup</a> | <a>DeleteGameServerGroup</a> | <a>ResumeGameServerGroup</a> | <a>SuspendGameServerGroup</a> | <a>DescribeGameServerInstances</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/reference-awssdk-fleetiq.html">All APIs by task</a> </p>
**/
export declare class GameServerGroup extends SpeakeasyBase {
    autoScalingGroupArn?: string;
    balancingStrategy?: BalancingStrategyEnum;
    creationTime?: Date;
    gameServerGroupArn?: string;
    gameServerGroupName?: string;
    gameServerProtectionPolicy?: GameServerProtectionPolicyEnum;
    instanceDefinitions?: InstanceDefinition[];
    lastUpdatedTime?: Date;
    roleArn?: string;
    status?: GameServerGroupStatusEnum;
    statusReason?: string;
    suspendedActions?: GameServerGroupActionEnum[];
}
