import { SpeakeasyBase } from "../../../internal/utils";
import { PlayerSessionStatusEnum } from "./playersessionstatusenum";
/**
 * <p>Represents a player session. Player sessions are created either for a specific game session, or as part of a game session placement or matchmaking request. A player session can represents a reserved player slot in a game session (when status is <code>RESERVED</code>) or actual player activity in a game session (when status is <code>ACTIVE</code>). A player session object, including player data, is automatically passed to a game session when the player connects to the game session and is validated. After the game session ends, player sessions information is retained for 30 days and then removed.</p> <p> <b>Related actions</b> </p> <p> <a>CreatePlayerSession</a> | <a>CreatePlayerSessions</a> | <a>DescribePlayerSessions</a> | <a>StartGameSessionPlacement</a> | <a>DescribeGameSessionPlacement</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
**/
export declare class PlayerSession extends SpeakeasyBase {
    creationTime?: Date;
    dnsName?: string;
    fleetArn?: string;
    fleetId?: string;
    gameSessionId?: string;
    ipAddress?: string;
    playerData?: string;
    playerId?: string;
    playerSessionId?: string;
    port?: number;
    status?: PlayerSessionStatusEnum;
    terminationTime?: Date;
}
