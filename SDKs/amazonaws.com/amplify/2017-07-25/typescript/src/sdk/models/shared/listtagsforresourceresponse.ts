import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListTagsForResourceResponse
/** 
 *  The response for the list tags for resource request. 
**/
export class ListTagsForResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
