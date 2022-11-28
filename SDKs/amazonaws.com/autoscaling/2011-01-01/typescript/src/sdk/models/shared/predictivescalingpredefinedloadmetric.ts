import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PredefinedLoadMetricTypeEnum } from "./predefinedloadmetrictypeenum";



// PredictiveScalingPredefinedLoadMetric
/** 
 * <p>Describes a load metric for a predictive scaling policy.</p> <p>When returned in the output of <code>DescribePolicies</code>, it indicates that a predictive scaling policy uses individually specified load and scaling metrics instead of a metric pair.</p>
**/
export class PredictiveScalingPredefinedLoadMetric extends SpeakeasyBase {
  @SpeakeasyMetadata()
  predefinedMetricType: PredefinedLoadMetricTypeEnum;

  @SpeakeasyMetadata()
  resourceLabel?: string;
}
