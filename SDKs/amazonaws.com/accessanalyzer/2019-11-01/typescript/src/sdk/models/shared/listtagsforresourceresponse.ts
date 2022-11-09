import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListTagsForResourceResponse
/** 
 * The response to the request.
**/
export class ListTagsForResourceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
