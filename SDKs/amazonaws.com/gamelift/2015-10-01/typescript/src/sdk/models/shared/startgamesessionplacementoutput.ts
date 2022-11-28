import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GameSessionPlacement } from "./gamesessionplacement";



// StartGameSessionPlacementOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class StartGameSessionPlacementOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GameSessionPlacement" })
  gameSessionPlacement?: GameSessionPlacement;
}
