import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GameSessionPlacement } from "./gamesessionplacement";



// StopGameSessionPlacementOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class StopGameSessionPlacementOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GameSessionPlacement" })
  gameSessionPlacement?: GameSessionPlacement;
}
