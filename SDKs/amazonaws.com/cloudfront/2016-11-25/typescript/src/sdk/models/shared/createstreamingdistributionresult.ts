import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamingDistribution } from "./streamingdistribution";



// CreateStreamingDistributionResult
/** 
 * The returned result of the corresponding request.
**/
export class CreateStreamingDistributionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  streamingDistribution?: StreamingDistribution;
}
