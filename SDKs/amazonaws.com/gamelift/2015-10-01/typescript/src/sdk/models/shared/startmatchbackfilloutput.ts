import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MatchmakingTicket } from "./matchmakingticket";



// StartMatchBackfillOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class StartMatchBackfillOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MatchmakingTicket" })
  matchmakingTicket?: MatchmakingTicket;
}
