import { SpeakeasyBase } from "../../../internal/utils";
import { GameSessionConnectionInfo } from "./gamesessionconnectioninfo";
import { Player } from "./player";
import { MatchmakingConfigurationStatusEnum } from "./matchmakingconfigurationstatusenum";
/**
 * Ticket generated to track the progress of a matchmaking request. Each ticket is uniquely identified by a ticket ID, supplied by the requester, when creating a matchmaking request with <a>StartMatchmaking</a>. Tickets can be retrieved by calling <a>DescribeMatchmaking</a> with the ticket ID.
**/
export declare class MatchmakingTicket extends SpeakeasyBase {
    configurationArn?: string;
    configurationName?: string;
    endTime?: Date;
    estimatedWaitTime?: number;
    gameSessionConnectionInfo?: GameSessionConnectionInfo;
    players?: Player[];
    startTime?: Date;
    status?: MatchmakingConfigurationStatusEnum;
    statusMessage?: string;
    statusReason?: string;
    ticketId?: string;
}
