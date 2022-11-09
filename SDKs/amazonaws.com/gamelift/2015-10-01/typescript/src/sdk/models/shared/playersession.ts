import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PlayerSessionStatusEnum } from "./playersessionstatusenum";


// PlayerSession
/** 
 * <p>Represents a player session. Player sessions are created either for a specific game session, or as part of a game session placement or matchmaking request. A player session can represents a reserved player slot in a game session (when status is <code>RESERVED</code>) or actual player activity in a game session (when status is <code>ACTIVE</code>). A player session object, including player data, is automatically passed to a game session when the player connects to the game session and is validated. After the game session ends, player sessions information is retained for 30 days and then removed.</p> <p> <b>Related actions</b> </p> <p> <a>CreatePlayerSession</a> | <a>CreatePlayerSessions</a> | <a>DescribePlayerSessions</a> | <a>StartGameSessionPlacement</a> | <a>DescribeGameSessionPlacement</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
**/
export class PlayerSession extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=DnsName" })
  dnsName?: string;

  @Metadata({ data: "json, name=FleetArn" })
  fleetArn?: string;

  @Metadata({ data: "json, name=FleetId" })
  fleetId?: string;

  @Metadata({ data: "json, name=GameSessionId" })
  gameSessionId?: string;

  @Metadata({ data: "json, name=IpAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=PlayerData" })
  playerData?: string;

  @Metadata({ data: "json, name=PlayerId" })
  playerId?: string;

  @Metadata({ data: "json, name=PlayerSessionId" })
  playerSessionId?: string;

  @Metadata({ data: "json, name=Port" })
  port?: number;

  @Metadata({ data: "json, name=Status" })
  status?: PlayerSessionStatusEnum;

  @Metadata({ data: "json, name=TerminationTime" })
  terminationTime?: Date;
}
