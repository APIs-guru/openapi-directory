import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GameSession } from "./gamesession";



// CreateGameSessionOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class CreateGameSessionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GameSession" })
  gameSession?: GameSession;
}
