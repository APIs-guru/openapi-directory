import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GameSessionPlacement } from "./gamesessionplacement";


// StartGameSessionPlacementOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class StartGameSessionPlacementOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GameSessionPlacement" })
  gameSessionPlacement?: GameSessionPlacement;
}
