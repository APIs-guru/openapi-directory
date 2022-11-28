import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GameSessionQueue } from "./gamesessionqueue";



// CreateGameSessionQueueOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class CreateGameSessionQueueOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GameSessionQueue" })
  gameSessionQueue?: GameSessionQueue;
}
