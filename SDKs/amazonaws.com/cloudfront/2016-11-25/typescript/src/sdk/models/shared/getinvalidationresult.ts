import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Invalidation } from "./invalidation";



// GetInvalidationResult
/** 
 * The returned result of the corresponding request.
**/
export class GetInvalidationResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  invalidation?: Invalidation;
}
