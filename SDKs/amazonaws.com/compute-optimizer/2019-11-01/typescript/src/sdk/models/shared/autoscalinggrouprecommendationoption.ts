import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingGroupConfiguration } from "./autoscalinggroupconfiguration";
import { UtilizationMetric } from "./utilizationmetric";



// AutoScalingGroupRecommendationOption
/** 
 * Describes a recommendation option for an Auto Scaling group.
**/
export class AutoScalingGroupRecommendationOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configuration" })
  configuration?: AutoScalingGroupConfiguration;

  @SpeakeasyMetadata({ data: "json, name=performanceRisk" })
  performanceRisk?: number;

  @SpeakeasyMetadata({ data: "json, name=projectedUtilizationMetrics", elemType: UtilizationMetric })
  projectedUtilizationMetrics?: UtilizationMetric[];

  @SpeakeasyMetadata({ data: "json, name=rank" })
  rank?: number;
}
