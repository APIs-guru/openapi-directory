import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MatchmakingTicket } from "./matchmakingticket";


// StartMatchBackfillOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class StartMatchBackfillOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=MatchmakingTicket" })
  matchmakingTicket?: MatchmakingTicket;
}
