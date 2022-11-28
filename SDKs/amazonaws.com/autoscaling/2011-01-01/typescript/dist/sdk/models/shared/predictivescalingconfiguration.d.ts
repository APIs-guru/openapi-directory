import { SpeakeasyBase } from "../../../internal/utils";
import { PredictiveScalingMaxCapacityBreachBehaviorEnum } from "./predictivescalingmaxcapacitybreachbehaviorenum";
import { PredictiveScalingMetricSpecification } from "./predictivescalingmetricspecification";
import { PredictiveScalingModeEnum } from "./predictivescalingmodeenum";
/**
 * Represents a predictive scaling policy configuration to use with Amazon EC2 Auto Scaling.
**/
export declare class PredictiveScalingConfiguration extends SpeakeasyBase {
    maxCapacityBreachBehavior?: PredictiveScalingMaxCapacityBreachBehaviorEnum;
    maxCapacityBuffer?: number;
    metricSpecifications: PredictiveScalingMetricSpecification[];
    mode?: PredictiveScalingModeEnum;
    schedulingBufferTime?: number;
}
