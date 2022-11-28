import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Invalidation } from "./invalidation";



// CreateInvalidationResult
/** 
 * The returned result of the corresponding request.
**/
export class CreateInvalidationResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  invalidation?: Invalidation;
}
