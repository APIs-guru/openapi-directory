import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GameProperty } from "./gameproperty";
import { PlacedPlayerSession } from "./placedplayersession";
import { PlayerLatency } from "./playerlatency";
import { GameSessionPlacementStateEnum } from "./gamesessionplacementstateenum";


// GameSessionPlacement
/** 
 * <p>Object that describes a <a>StartGameSessionPlacement</a> request. This object includes the full details of the original request plus the current status and start/end time stamps.</p> <p>Game session placement-related operations include:</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul>
**/
export class GameSessionPlacement extends SpeakeasyBase {
  @Metadata({ data: "json, name=DnsName" })
  dnsName?: string;

  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=GameProperties", elemType: shared.GameProperty })
  gameProperties?: GameProperty[];

  @Metadata({ data: "json, name=GameSessionArn" })
  gameSessionArn?: string;

  @Metadata({ data: "json, name=GameSessionData" })
  gameSessionData?: string;

  @Metadata({ data: "json, name=GameSessionId" })
  gameSessionId?: string;

  @Metadata({ data: "json, name=GameSessionName" })
  gameSessionName?: string;

  @Metadata({ data: "json, name=GameSessionQueueName" })
  gameSessionQueueName?: string;

  @Metadata({ data: "json, name=GameSessionRegion" })
  gameSessionRegion?: string;

  @Metadata({ data: "json, name=IpAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=MatchmakerData" })
  matchmakerData?: string;

  @Metadata({ data: "json, name=MaximumPlayerSessionCount" })
  maximumPlayerSessionCount?: number;

  @Metadata({ data: "json, name=PlacedPlayerSessions", elemType: shared.PlacedPlayerSession })
  placedPlayerSessions?: PlacedPlayerSession[];

  @Metadata({ data: "json, name=PlacementId" })
  placementId?: string;

  @Metadata({ data: "json, name=PlayerLatencies", elemType: shared.PlayerLatency })
  playerLatencies?: PlayerLatency[];

  @Metadata({ data: "json, name=Port" })
  port?: number;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: GameSessionPlacementStateEnum;
}
