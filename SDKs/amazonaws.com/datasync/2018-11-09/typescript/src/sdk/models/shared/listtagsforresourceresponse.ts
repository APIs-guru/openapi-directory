import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagListEntry } from "./taglistentry";



// ListTagsForResourceResponse
/** 
 * ListTagsForResourceResponse
**/
export class ListTagsForResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: TagListEntry })
  tags?: TagListEntry[];
}
