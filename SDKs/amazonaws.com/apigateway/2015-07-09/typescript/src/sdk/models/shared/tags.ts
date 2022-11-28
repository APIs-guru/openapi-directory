import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Tags
/** 
 * The collection of tags. Each tag element is associated with a given resource.
**/
export class Tags extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
