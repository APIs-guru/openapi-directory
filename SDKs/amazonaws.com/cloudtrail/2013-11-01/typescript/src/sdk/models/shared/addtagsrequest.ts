import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// AddTagsRequest
/** 
 * Specifies the tags to add to a trail.
**/
export class AddTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "json, name=TagsList", elemType: Tag })
  tagsList?: Tag[];
}
