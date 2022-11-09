import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GameSessionQueue } from "./gamesessionqueue";


// UpdateGameSessionQueueOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class UpdateGameSessionQueueOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GameSessionQueue" })
  gameSessionQueue?: GameSessionQueue;
}
