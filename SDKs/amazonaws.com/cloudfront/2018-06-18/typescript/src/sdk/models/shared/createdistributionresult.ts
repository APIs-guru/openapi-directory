import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Distribution } from "./distribution";



// CreateDistributionResult
/** 
 * The returned result of the corresponding request.
**/
export class CreateDistributionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  distribution?: Distribution;
}
