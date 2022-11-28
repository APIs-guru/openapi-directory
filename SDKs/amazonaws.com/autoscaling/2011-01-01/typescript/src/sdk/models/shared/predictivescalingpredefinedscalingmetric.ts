import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PredefinedScalingMetricTypeEnum } from "./predefinedscalingmetrictypeenum";



// PredictiveScalingPredefinedScalingMetric
/** 
 * <p>Describes a scaling metric for a predictive scaling policy.</p> <p>When returned in the output of <code>DescribePolicies</code>, it indicates that a predictive scaling policy uses individually specified load and scaling metrics instead of a metric pair.</p>
**/
export class PredictiveScalingPredefinedScalingMetric extends SpeakeasyBase {
  @SpeakeasyMetadata()
  predefinedMetricType: PredefinedScalingMetricTypeEnum;

  @SpeakeasyMetadata()
  resourceLabel?: string;
}
