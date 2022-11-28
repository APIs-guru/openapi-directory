import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamingDistribution } from "./streamingdistribution";



// GetStreamingDistributionResult
/** 
 * The returned result of the corresponding request.
**/
export class GetStreamingDistributionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  streamingDistribution?: StreamingDistribution;
}
