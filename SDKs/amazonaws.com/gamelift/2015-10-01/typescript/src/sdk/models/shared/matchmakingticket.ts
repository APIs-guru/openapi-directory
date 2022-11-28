import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GameSessionConnectionInfo } from "./gamesessionconnectioninfo";
import { Player } from "./player";
import { MatchmakingConfigurationStatusEnum } from "./matchmakingconfigurationstatusenum";



// MatchmakingTicket
/** 
 * Ticket generated to track the progress of a matchmaking request. Each ticket is uniquely identified by a ticket ID, supplied by the requester, when creating a matchmaking request with <a>StartMatchmaking</a>. Tickets can be retrieved by calling <a>DescribeMatchmaking</a> with the ticket ID.
**/
export class MatchmakingTicket extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationArn" })
  configurationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ConfigurationName" })
  configurationName?: string;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=EstimatedWaitTime" })
  estimatedWaitTime?: number;

  @SpeakeasyMetadata({ data: "json, name=GameSessionConnectionInfo" })
  gameSessionConnectionInfo?: GameSessionConnectionInfo;

  @SpeakeasyMetadata({ data: "json, name=Players", elemType: Player })
  players?: Player[];

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: MatchmakingConfigurationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=StatusReason" })
  statusReason?: string;

  @SpeakeasyMetadata({ data: "json, name=TicketId" })
  ticketId?: string;
}
