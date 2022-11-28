import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamingDistributionList } from "./streamingdistributionlist";



// ListStreamingDistributionsResult
/** 
 * The returned result of the corresponding request. 
**/
export class ListStreamingDistributionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  streamingDistributionList?: StreamingDistributionList;
}
