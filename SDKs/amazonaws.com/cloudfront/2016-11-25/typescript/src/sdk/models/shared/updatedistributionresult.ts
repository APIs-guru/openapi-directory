import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Distribution } from "./distribution";



// UpdateDistributionResult
/** 
 * The returned result of the corresponding request.
**/
export class UpdateDistributionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  distribution?: Distribution;
}
