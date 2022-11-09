import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GameSessionPlacement } from "./gamesessionplacement";


// DescribeGameSessionPlacementOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeGameSessionPlacementOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GameSessionPlacement" })
  gameSessionPlacement?: GameSessionPlacement;
}
