import { SpeakeasyBase } from "../../../internal/utils";
import { PredefinedMetricPairTypeEnum } from "./predefinedmetricpairtypeenum";
/**
 * Represents a metric pair for a predictive scaling policy.
**/
export declare class PredictiveScalingPredefinedMetricPair extends SpeakeasyBase {
    predefinedMetricType: PredefinedMetricPairTypeEnum;
    resourceLabel?: string;
}
