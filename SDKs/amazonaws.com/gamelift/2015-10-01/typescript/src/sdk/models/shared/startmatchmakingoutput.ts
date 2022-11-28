import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MatchmakingTicket } from "./matchmakingticket";



// StartMatchmakingOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class StartMatchmakingOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MatchmakingTicket" })
  matchmakingTicket?: MatchmakingTicket;
}
