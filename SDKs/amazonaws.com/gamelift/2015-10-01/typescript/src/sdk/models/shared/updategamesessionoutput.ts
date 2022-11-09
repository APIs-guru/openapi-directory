import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GameSession } from "./gamesession";


// UpdateGameSessionOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class UpdateGameSessionOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GameSession" })
  gameSession?: GameSession;
}
