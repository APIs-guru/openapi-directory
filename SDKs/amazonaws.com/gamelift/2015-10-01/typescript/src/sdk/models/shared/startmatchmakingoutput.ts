import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MatchmakingTicket } from "./matchmakingticket";


// StartMatchmakingOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class StartMatchmakingOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=MatchmakingTicket" })
  matchmakingTicket?: MatchmakingTicket;
}
