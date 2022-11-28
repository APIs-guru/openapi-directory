import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DistributionList } from "./distributionlist";



// ListDistributionsResult
/** 
 * The returned result of the corresponding request. 
**/
export class ListDistributionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  distributionList?: DistributionList;
}
