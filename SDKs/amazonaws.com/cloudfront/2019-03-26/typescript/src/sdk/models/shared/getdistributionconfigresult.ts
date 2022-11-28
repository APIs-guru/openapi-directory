import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DistributionConfig } from "./distributionconfig";



// GetDistributionConfigResult
/** 
 * The returned result of the corresponding request.
**/
export class GetDistributionConfigResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  distributionConfig?: DistributionConfig;
}
