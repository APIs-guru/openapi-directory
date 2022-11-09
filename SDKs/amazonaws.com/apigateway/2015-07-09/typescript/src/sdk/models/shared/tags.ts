import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Tags
/** 
 * The collection of tags. Each tag element is associated with a given resource.
**/
export class Tags extends SpeakeasyBase {
  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
