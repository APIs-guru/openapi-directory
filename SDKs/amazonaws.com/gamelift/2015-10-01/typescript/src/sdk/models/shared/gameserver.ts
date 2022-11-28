import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GameServerClaimStatusEnum } from "./gameserverclaimstatusenum";
import { GameServerUtilizationStatusEnum } from "./gameserverutilizationstatusenum";



// GameServer
/** 
 * <p> <b>This data type is used with the GameLift FleetIQ and game server groups.</b> </p> <p>Properties describing a game server that is running on an instance in a <a>GameServerGroup</a>. </p> <p>A game server is created by a successful call to <code>RegisterGameServer</code> and deleted by calling <code>DeregisterGameServer</code>. A game server is claimed to host a game session by calling <code>ClaimGameServer</code>. </p> <p> <b>Related actions</b> </p> <p> <a>RegisterGameServer</a> | <a>ListGameServers</a> | <a>ClaimGameServer</a> | <a>DescribeGameServer</a> | <a>UpdateGameServer</a> | <a>DeregisterGameServer</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/reference-awssdk-fleetiq.html">All APIs by task</a> </p>
**/
export class GameServer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClaimStatus" })
  claimStatus?: GameServerClaimStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ConnectionInfo" })
  connectionInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=GameServerData" })
  gameServerData?: string;

  @SpeakeasyMetadata({ data: "json, name=GameServerGroupArn" })
  gameServerGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=GameServerGroupName" })
  gameServerGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=GameServerId" })
  gameServerId?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=LastClaimTime" })
  lastClaimTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastHealthCheckTime" })
  lastHealthCheckTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=RegistrationTime" })
  registrationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=UtilizationStatus" })
  utilizationStatus?: GameServerUtilizationStatusEnum;
}
