import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MatchRange
/** 
 * An object that represents the range of values to match on. The first character of the range is included in the range, though the last character is not. For example, if the range specified were 1-100, only values 1-99 would be matched.
**/
export class MatchRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end: number;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start: number;
}
