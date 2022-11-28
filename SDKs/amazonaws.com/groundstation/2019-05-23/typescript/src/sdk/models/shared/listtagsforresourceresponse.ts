import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListTagsForResourceResponse
/** 
 * <p/>
**/
export class ListTagsForResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
