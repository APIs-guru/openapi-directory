import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PlayerSession } from "./playersession";


// CreatePlayerSessionOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class CreatePlayerSessionOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=PlayerSession" })
  playerSession?: PlayerSession;
}
