import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Position } from "./position";
import { Position } from "./position";


// Span
/** 
 * A span in a policy. The span consists of a start position (inclusive) and end position (exclusive).
**/
export class Span extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end: Position;

  @Metadata({ data: "json, name=start" })
  start: Position;
}
