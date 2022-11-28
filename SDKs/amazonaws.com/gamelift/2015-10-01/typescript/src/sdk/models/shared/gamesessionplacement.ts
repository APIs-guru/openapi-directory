import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GameProperty } from "./gameproperty";
import { PlacedPlayerSession } from "./placedplayersession";
import { PlayerLatency } from "./playerlatency";
import { GameSessionPlacementStateEnum } from "./gamesessionplacementstateenum";



// GameSessionPlacement
/** 
 * <p>Object that describes a <a>StartGameSessionPlacement</a> request. This object includes the full details of the original request plus the current status and start/end time stamps.</p> <p>Game session placement-related operations include:</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul>
**/
export class GameSessionPlacement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DnsName" })
  dnsName?: string;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=GameProperties", elemType: GameProperty })
  gameProperties?: GameProperty[];

  @SpeakeasyMetadata({ data: "json, name=GameSessionArn" })
  gameSessionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=GameSessionData" })
  gameSessionData?: string;

  @SpeakeasyMetadata({ data: "json, name=GameSessionId" })
  gameSessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=GameSessionName" })
  gameSessionName?: string;

  @SpeakeasyMetadata({ data: "json, name=GameSessionQueueName" })
  gameSessionQueueName?: string;

  @SpeakeasyMetadata({ data: "json, name=GameSessionRegion" })
  gameSessionRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=IpAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=MatchmakerData" })
  matchmakerData?: string;

  @SpeakeasyMetadata({ data: "json, name=MaximumPlayerSessionCount" })
  maximumPlayerSessionCount?: number;

  @SpeakeasyMetadata({ data: "json, name=PlacedPlayerSessions", elemType: PlacedPlayerSession })
  placedPlayerSessions?: PlacedPlayerSession[];

  @SpeakeasyMetadata({ data: "json, name=PlacementId" })
  placementId?: string;

  @SpeakeasyMetadata({ data: "json, name=PlayerLatencies", elemType: PlayerLatency })
  playerLatencies?: PlayerLatency[];

  @SpeakeasyMetadata({ data: "json, name=Port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: GameSessionPlacementStateEnum;
}
