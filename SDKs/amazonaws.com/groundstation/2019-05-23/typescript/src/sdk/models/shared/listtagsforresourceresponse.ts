import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListTagsForResourceResponse
/** 
 * <p/>
**/
export class ListTagsForResourceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
