import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamingDistributionConfig } from "./streamingdistributionconfig";



// GetStreamingDistributionConfigResult
/** 
 * The returned result of the corresponding request.
**/
export class GetStreamingDistributionConfigResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  streamingDistributionConfig?: StreamingDistributionConfig;
}
