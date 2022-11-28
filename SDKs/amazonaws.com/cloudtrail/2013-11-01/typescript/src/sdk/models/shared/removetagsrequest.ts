import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// RemoveTagsRequest
/** 
 * Specifies the tags to remove from a trail.
**/
export class RemoveTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "json, name=TagsList", elemType: Tag })
  tagsList?: Tag[];
}
