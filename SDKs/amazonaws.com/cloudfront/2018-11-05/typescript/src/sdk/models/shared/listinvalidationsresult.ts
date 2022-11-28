import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InvalidationList } from "./invalidationlist";



// ListInvalidationsResult
/** 
 * The returned result of the corresponding request. 
**/
export class ListInvalidationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  invalidationList?: InvalidationList;
}
