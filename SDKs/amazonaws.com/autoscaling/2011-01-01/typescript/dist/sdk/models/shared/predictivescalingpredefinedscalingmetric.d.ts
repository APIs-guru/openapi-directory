import { SpeakeasyBase } from "../../../internal/utils";
import { PredefinedScalingMetricTypeEnum } from "./predefinedscalingmetrictypeenum";
/**
 * <p>Describes a scaling metric for a predictive scaling policy.</p> <p>When returned in the output of <code>DescribePolicies</code>, it indicates that a predictive scaling policy uses individually specified load and scaling metrics instead of a metric pair.</p>
**/
export declare class PredictiveScalingPredefinedScalingMetric extends SpeakeasyBase {
    predefinedMetricType: PredefinedScalingMetricTypeEnum;
    resourceLabel?: string;
}
