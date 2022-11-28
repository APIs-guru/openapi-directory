import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MatchmakingTicket } from "./matchmakingticket";



// DescribeMatchmakingOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeMatchmakingOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TicketList", elemType: MatchmakingTicket })
  ticketList?: MatchmakingTicket[];
}
