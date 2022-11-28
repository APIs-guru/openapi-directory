import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// TagListMessage
/** 
 * Represents the output of <a>ListTagsForResource</a>.
**/
export class TagListMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Tag })
  tagList?: Tag[];
}
