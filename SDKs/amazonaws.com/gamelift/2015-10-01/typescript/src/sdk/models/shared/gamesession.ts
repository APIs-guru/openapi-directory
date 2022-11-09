import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GameProperty } from "./gameproperty";
import { PlayerSessionCreationPolicyEnum } from "./playersessioncreationpolicyenum";
import { GameSessionStatusEnum } from "./gamesessionstatusenum";
import { GameSessionStatusReasonEnum } from "./gamesessionstatusreasonenum";


// GameSession
/** 
 * <p>Properties describing a game session.</p> <p>A game session in ACTIVE status can host players. When a game session ends, its status is set to <code>TERMINATED</code>. </p> <p>Once the session ends, the game session object is retained for 30 days. This means you can reuse idempotency token values after this time. Game session logs are retained for 14 days.</p> <p> <b>Related actions</b> </p> <p> <a>CreateGameSession</a> | <a>DescribeGameSessions</a> | <a>DescribeGameSessionDetails</a> | <a>SearchGameSessions</a> | <a>UpdateGameSession</a> | <a>GetGameSessionLogUrl</a> | <a>StartGameSessionPlacement</a> | <a>DescribeGameSessionPlacement</a> | <a>StopGameSessionPlacement</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
**/
export class GameSession extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=CreatorId" })
  creatorId?: string;

  @Metadata({ data: "json, name=CurrentPlayerSessionCount" })
  currentPlayerSessionCount?: number;

  @Metadata({ data: "json, name=DnsName" })
  dnsName?: string;

  @Metadata({ data: "json, name=FleetArn" })
  fleetArn?: string;

  @Metadata({ data: "json, name=FleetId" })
  fleetId?: string;

  @Metadata({ data: "json, name=GameProperties", elemType: shared.GameProperty })
  gameProperties?: GameProperty[];

  @Metadata({ data: "json, name=GameSessionData" })
  gameSessionData?: string;

  @Metadata({ data: "json, name=GameSessionId" })
  gameSessionId?: string;

  @Metadata({ data: "json, name=IpAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=Location" })
  location?: string;

  @Metadata({ data: "json, name=MatchmakerData" })
  matchmakerData?: string;

  @Metadata({ data: "json, name=MaximumPlayerSessionCount" })
  maximumPlayerSessionCount?: number;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=PlayerSessionCreationPolicy" })
  playerSessionCreationPolicy?: PlayerSessionCreationPolicyEnum;

  @Metadata({ data: "json, name=Port" })
  port?: number;

  @Metadata({ data: "json, name=Status" })
  status?: GameSessionStatusEnum;

  @Metadata({ data: "json, name=StatusReason" })
  statusReason?: GameSessionStatusReasonEnum;

  @Metadata({ data: "json, name=TerminationTime" })
  terminationTime?: Date;
}
