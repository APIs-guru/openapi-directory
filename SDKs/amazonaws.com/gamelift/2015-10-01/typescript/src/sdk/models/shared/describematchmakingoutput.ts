import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MatchmakingTicket } from "./matchmakingticket";


// DescribeMatchmakingOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeMatchmakingOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=TicketList", elemType: shared.MatchmakingTicket })
  ticketList?: MatchmakingTicket[];
}
