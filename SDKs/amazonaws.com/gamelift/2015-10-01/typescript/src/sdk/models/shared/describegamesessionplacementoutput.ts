import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GameSessionPlacement } from "./gamesessionplacement";



// DescribeGameSessionPlacementOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeGameSessionPlacementOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GameSessionPlacement" })
  gameSessionPlacement?: GameSessionPlacement;
}
