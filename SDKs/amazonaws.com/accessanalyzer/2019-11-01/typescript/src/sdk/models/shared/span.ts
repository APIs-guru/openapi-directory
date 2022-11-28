import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Position } from "./position";



// Span
/** 
 * A span in a policy. The span consists of a start position (inclusive) and end position (exclusive).
**/
export class Span extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end: Position;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start: Position;
}
