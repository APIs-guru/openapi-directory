import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlayerSession } from "./playersession";



// CreatePlayerSessionOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class CreatePlayerSessionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PlayerSession" })
  playerSession?: PlayerSession;
}
