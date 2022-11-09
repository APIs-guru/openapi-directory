import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ScalingMetricTypeEnum } from "./scalingmetrictypeenum";
/**
 * Represents a predefined metric that can be used for dynamic scaling as part of a target tracking scaling policy.
**/
export declare class PredefinedScalingMetricSpecification extends SpeakeasyBase {
    predefinedScalingMetricType: ScalingMetricTypeEnum;
    resourceLabel?: string;
}
