import { SpeakeasyBase } from "../../../internal/utils";
import { GameProperty } from "./gameproperty";
import { PlacedPlayerSession } from "./placedplayersession";
import { PlayerLatency } from "./playerlatency";
import { GameSessionPlacementStateEnum } from "./gamesessionplacementstateenum";
/**
 * <p>Object that describes a <a>StartGameSessionPlacement</a> request. This object includes the full details of the original request plus the current status and start/end time stamps.</p> <p>Game session placement-related operations include:</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul>
**/
export declare class GameSessionPlacement extends SpeakeasyBase {
    dnsName?: string;
    endTime?: Date;
    gameProperties?: GameProperty[];
    gameSessionArn?: string;
    gameSessionData?: string;
    gameSessionId?: string;
    gameSessionName?: string;
    gameSessionQueueName?: string;
    gameSessionRegion?: string;
    ipAddress?: string;
    matchmakerData?: string;
    maximumPlayerSessionCount?: number;
    placedPlayerSessions?: PlacedPlayerSession[];
    placementId?: string;
    playerLatencies?: PlayerLatency[];
    port?: number;
    startTime?: Date;
    status?: GameSessionPlacementStateEnum;
}
