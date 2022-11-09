import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TagFilter
/** 
 * Represents a tag.
**/
export class TagFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=Values" })
  values?: string[];
}
