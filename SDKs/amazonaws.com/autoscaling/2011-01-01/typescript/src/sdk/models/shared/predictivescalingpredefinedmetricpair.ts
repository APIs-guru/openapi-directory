import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PredefinedMetricPairTypeEnum } from "./predefinedmetricpairtypeenum";



// PredictiveScalingPredefinedMetricPair
/** 
 * Represents a metric pair for a predictive scaling policy. 
**/
export class PredictiveScalingPredefinedMetricPair extends SpeakeasyBase {
  @SpeakeasyMetadata()
  predefinedMetricType: PredefinedMetricPairTypeEnum;

  @SpeakeasyMetadata()
  resourceLabel?: string;
}
