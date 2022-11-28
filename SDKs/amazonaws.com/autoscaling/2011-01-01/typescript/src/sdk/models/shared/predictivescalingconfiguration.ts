import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PredictiveScalingMaxCapacityBreachBehaviorEnum } from "./predictivescalingmaxcapacitybreachbehaviorenum";
import { PredictiveScalingMetricSpecification } from "./predictivescalingmetricspecification";
import { PredictiveScalingModeEnum } from "./predictivescalingmodeenum";



// PredictiveScalingConfiguration
/** 
 * Represents a predictive scaling policy configuration to use with Amazon EC2 Auto Scaling.
**/
export class PredictiveScalingConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  maxCapacityBreachBehavior?: PredictiveScalingMaxCapacityBreachBehaviorEnum;

  @SpeakeasyMetadata()
  maxCapacityBuffer?: number;

  @SpeakeasyMetadata({ elemType: PredictiveScalingMetricSpecification })
  metricSpecifications: PredictiveScalingMetricSpecification[];

  @SpeakeasyMetadata()
  mode?: PredictiveScalingModeEnum;

  @SpeakeasyMetadata()
  schedulingBufferTime?: number;
}
