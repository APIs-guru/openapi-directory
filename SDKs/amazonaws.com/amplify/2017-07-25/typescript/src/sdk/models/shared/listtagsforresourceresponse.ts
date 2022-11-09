import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListTagsForResourceResponse
/** 
 *  The response for the list tags for resource request. 
**/
export class ListTagsForResourceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
