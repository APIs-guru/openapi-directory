import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GameSession } from "./gamesession";


// CreateGameSessionOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class CreateGameSessionOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GameSession" })
  gameSession?: GameSession;
}
