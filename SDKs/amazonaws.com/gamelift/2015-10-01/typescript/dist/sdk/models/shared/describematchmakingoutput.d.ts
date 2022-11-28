import { SpeakeasyBase } from "../../../internal/utils";
import { MatchmakingTicket } from "./matchmakingticket";
/**
 * Represents the returned data in response to a request operation.
**/
export declare class DescribeMatchmakingOutput extends SpeakeasyBase {
    ticketList?: MatchmakingTicket[];
}
