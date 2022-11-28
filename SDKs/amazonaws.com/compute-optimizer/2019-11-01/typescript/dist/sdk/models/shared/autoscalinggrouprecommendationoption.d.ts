import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingGroupConfiguration } from "./autoscalinggroupconfiguration";
import { UtilizationMetric } from "./utilizationmetric";
/**
 * Describes a recommendation option for an Auto Scaling group.
**/
export declare class AutoScalingGroupRecommendationOption extends SpeakeasyBase {
    configuration?: AutoScalingGroupConfiguration;
    performanceRisk?: number;
    projectedUtilizationMetrics?: UtilizationMetric[];
    rank?: number;
}
