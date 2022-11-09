import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GameSessionConnectionInfo } from "./gamesessionconnectioninfo";
import { Player } from "./player";
import { MatchmakingConfigurationStatusEnum } from "./matchmakingconfigurationstatusenum";


// MatchmakingTicket
/** 
 * Ticket generated to track the progress of a matchmaking request. Each ticket is uniquely identified by a ticket ID, supplied by the requester, when creating a matchmaking request with <a>StartMatchmaking</a>. Tickets can be retrieved by calling <a>DescribeMatchmaking</a> with the ticket ID.
**/
export class MatchmakingTicket extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationArn" })
  configurationArn?: string;

  @Metadata({ data: "json, name=ConfigurationName" })
  configurationName?: string;

  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=EstimatedWaitTime" })
  estimatedWaitTime?: number;

  @Metadata({ data: "json, name=GameSessionConnectionInfo" })
  gameSessionConnectionInfo?: GameSessionConnectionInfo;

  @Metadata({ data: "json, name=Players", elemType: shared.Player })
  players?: Player[];

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: MatchmakingConfigurationStatusEnum;

  @Metadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=StatusReason" })
  statusReason?: string;

  @Metadata({ data: "json, name=TicketId" })
  ticketId?: string;
}
