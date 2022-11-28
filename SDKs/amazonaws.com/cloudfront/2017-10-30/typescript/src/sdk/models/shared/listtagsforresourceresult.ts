import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tags } from "./tags";



// ListTagsForResourceResult
/** 
 *  The returned result of the corresponding request.
**/
export class ListTagsForResourceResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  tags: Tags;
}
