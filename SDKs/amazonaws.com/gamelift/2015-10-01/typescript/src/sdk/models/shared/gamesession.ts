import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GameProperty } from "./gameproperty";
import { PlayerSessionCreationPolicyEnum } from "./playersessioncreationpolicyenum";
import { GameSessionStatusEnum } from "./gamesessionstatusenum";
import { GameSessionStatusReasonEnum } from "./gamesessionstatusreasonenum";



// GameSession
/** 
 * <p>Properties describing a game session.</p> <p>A game session in ACTIVE status can host players. When a game session ends, its status is set to <code>TERMINATED</code>. </p> <p>Once the session ends, the game session object is retained for 30 days. This means you can reuse idempotency token values after this time. Game session logs are retained for 14 days.</p> <p> <b>Related actions</b> </p> <p> <a>CreateGameSession</a> | <a>DescribeGameSessions</a> | <a>DescribeGameSessionDetails</a> | <a>SearchGameSessions</a> | <a>UpdateGameSession</a> | <a>GetGameSessionLogUrl</a> | <a>StartGameSessionPlacement</a> | <a>DescribeGameSessionPlacement</a> | <a>StopGameSessionPlacement</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
**/
export class GameSession extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=CreatorId" })
  creatorId?: string;

  @SpeakeasyMetadata({ data: "json, name=CurrentPlayerSessionCount" })
  currentPlayerSessionCount?: number;

  @SpeakeasyMetadata({ data: "json, name=DnsName" })
  dnsName?: string;

  @SpeakeasyMetadata({ data: "json, name=FleetArn" })
  fleetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId?: string;

  @SpeakeasyMetadata({ data: "json, name=GameProperties", elemType: GameProperty })
  gameProperties?: GameProperty[];

  @SpeakeasyMetadata({ data: "json, name=GameSessionData" })
  gameSessionData?: string;

  @SpeakeasyMetadata({ data: "json, name=GameSessionId" })
  gameSessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=IpAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=Location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=MatchmakerData" })
  matchmakerData?: string;

  @SpeakeasyMetadata({ data: "json, name=MaximumPlayerSessionCount" })
  maximumPlayerSessionCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PlayerSessionCreationPolicy" })
  playerSessionCreationPolicy?: PlayerSessionCreationPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=Port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: GameSessionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusReason" })
  statusReason?: GameSessionStatusReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=TerminationTime" })
  terminationTime?: Date;
}
