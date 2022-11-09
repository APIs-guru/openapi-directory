import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GameSessionQueue } from "./gamesessionqueue";


// CreateGameSessionQueueOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class CreateGameSessionQueueOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GameSessionQueue" })
  gameSessionQueue?: GameSessionQueue;
}
