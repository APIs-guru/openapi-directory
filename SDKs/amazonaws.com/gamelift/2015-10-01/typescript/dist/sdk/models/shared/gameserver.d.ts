import { SpeakeasyBase } from "../../../internal/utils";
import { GameServerClaimStatusEnum } from "./gameserverclaimstatusenum";
import { GameServerUtilizationStatusEnum } from "./gameserverutilizationstatusenum";
/**
 * <p> <b>This data type is used with the GameLift FleetIQ and game server groups.</b> </p> <p>Properties describing a game server that is running on an instance in a <a>GameServerGroup</a>. </p> <p>A game server is created by a successful call to <code>RegisterGameServer</code> and deleted by calling <code>DeregisterGameServer</code>. A game server is claimed to host a game session by calling <code>ClaimGameServer</code>. </p> <p> <b>Related actions</b> </p> <p> <a>RegisterGameServer</a> | <a>ListGameServers</a> | <a>ClaimGameServer</a> | <a>DescribeGameServer</a> | <a>UpdateGameServer</a> | <a>DeregisterGameServer</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/reference-awssdk-fleetiq.html">All APIs by task</a> </p>
**/
export declare class GameServer extends SpeakeasyBase {
    claimStatus?: GameServerClaimStatusEnum;
    connectionInfo?: string;
    gameServerData?: string;
    gameServerGroupArn?: string;
    gameServerGroupName?: string;
    gameServerId?: string;
    instanceId?: string;
    lastClaimTime?: Date;
    lastHealthCheckTime?: Date;
    registrationTime?: Date;
    utilizationStatus?: GameServerUtilizationStatusEnum;
}
