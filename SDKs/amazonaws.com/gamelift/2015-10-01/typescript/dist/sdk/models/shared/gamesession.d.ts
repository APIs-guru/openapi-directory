import { SpeakeasyBase } from "../../../internal/utils";
import { GameProperty } from "./gameproperty";
import { PlayerSessionCreationPolicyEnum } from "./playersessioncreationpolicyenum";
import { GameSessionStatusEnum } from "./gamesessionstatusenum";
import { GameSessionStatusReasonEnum } from "./gamesessionstatusreasonenum";
/**
 * <p>Properties describing a game session.</p> <p>A game session in ACTIVE status can host players. When a game session ends, its status is set to <code>TERMINATED</code>. </p> <p>Once the session ends, the game session object is retained for 30 days. This means you can reuse idempotency token values after this time. Game session logs are retained for 14 days.</p> <p> <b>Related actions</b> </p> <p> <a>CreateGameSession</a> | <a>DescribeGameSessions</a> | <a>DescribeGameSessionDetails</a> | <a>SearchGameSessions</a> | <a>UpdateGameSession</a> | <a>GetGameSessionLogUrl</a> | <a>StartGameSessionPlacement</a> | <a>DescribeGameSessionPlacement</a> | <a>StopGameSessionPlacement</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
**/
export declare class GameSession extends SpeakeasyBase {
    creationTime?: Date;
    creatorId?: string;
    currentPlayerSessionCount?: number;
    dnsName?: string;
    fleetArn?: string;
    fleetId?: string;
    gameProperties?: GameProperty[];
    gameSessionData?: string;
    gameSessionId?: string;
    ipAddress?: string;
    location?: string;
    matchmakerData?: string;
    maximumPlayerSessionCount?: number;
    name?: string;
    playerSessionCreationPolicy?: PlayerSessionCreationPolicyEnum;
    port?: number;
    status?: GameSessionStatusEnum;
    statusReason?: GameSessionStatusReasonEnum;
    terminationTime?: Date;
}
