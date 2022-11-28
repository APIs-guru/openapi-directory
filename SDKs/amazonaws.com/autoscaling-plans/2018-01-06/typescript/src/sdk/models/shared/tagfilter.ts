import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TagFilter
/** 
 * Represents a tag.
**/
export class TagFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values?: string[];
}
