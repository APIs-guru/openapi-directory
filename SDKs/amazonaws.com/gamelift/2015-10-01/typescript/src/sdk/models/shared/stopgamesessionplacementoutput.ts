import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GameSessionPlacement } from "./gamesessionplacement";


// StopGameSessionPlacementOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class StopGameSessionPlacementOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GameSessionPlacement" })
  gameSessionPlacement?: GameSessionPlacement;
}
