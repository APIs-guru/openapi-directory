import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Distribution } from "./distribution";



// GetDistributionResult
/** 
 * The returned result of the corresponding request.
**/
export class GetDistributionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  distribution?: Distribution;
}
