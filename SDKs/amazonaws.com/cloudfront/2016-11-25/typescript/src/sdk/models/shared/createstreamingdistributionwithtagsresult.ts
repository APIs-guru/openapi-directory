import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamingDistribution } from "./streamingdistribution";



// CreateStreamingDistributionWithTagsResult
/** 
 * The returned result of the corresponding request. 
**/
export class CreateStreamingDistributionWithTagsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  streamingDistribution?: StreamingDistribution;
}
