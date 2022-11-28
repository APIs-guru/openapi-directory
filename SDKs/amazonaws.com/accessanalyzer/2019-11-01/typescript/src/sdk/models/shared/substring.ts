import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Substring
/** 
 * A reference to a substring of a literal string in a JSON document.
**/
export class Substring extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=length" })
  length: number;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start: number;
}
