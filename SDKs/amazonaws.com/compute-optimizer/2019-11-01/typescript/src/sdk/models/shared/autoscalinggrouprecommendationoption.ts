import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AutoScalingGroupConfiguration } from "./autoscalinggroupconfiguration";
import { UtilizationMetric } from "./utilizationmetric";


// AutoScalingGroupRecommendationOption
/** 
 * Describes a recommendation option for an Auto Scaling group.
**/
export class AutoScalingGroupRecommendationOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=configuration" })
  configuration?: AutoScalingGroupConfiguration;

  @Metadata({ data: "json, name=performanceRisk" })
  performanceRisk?: number;

  @Metadata({ data: "json, name=projectedUtilizationMetrics", elemType: shared.UtilizationMetric })
  projectedUtilizationMetrics?: UtilizationMetric[];

  @Metadata({ data: "json, name=rank" })
  rank?: number;
}
