import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Distribution } from "./distribution";



// CreateDistributionWithTagsResult
/** 
 * The returned result of the corresponding request. 
**/
export class CreateDistributionWithTagsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  distribution?: Distribution;
}
