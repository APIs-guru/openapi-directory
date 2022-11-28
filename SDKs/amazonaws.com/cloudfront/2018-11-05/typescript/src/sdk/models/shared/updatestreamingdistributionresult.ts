import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamingDistribution } from "./streamingdistribution";



// UpdateStreamingDistributionResult
/** 
 * The returned result of the corresponding request.
**/
export class UpdateStreamingDistributionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  streamingDistribution?: StreamingDistribution;
}
