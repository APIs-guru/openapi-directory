import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// ResourceTag
/** 
 * A resource tag.
**/
export class ResourceTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=TagsList", elemType: Tag })
  tagsList?: Tag[];
}
