import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Substring
/** 
 * A reference to a substring of a literal string in a JSON document.
**/
export class Substring extends SpeakeasyBase {
  @Metadata({ data: "json, name=length" })
  length: number;

  @Metadata({ data: "json, name=start" })
  start: number;
}
