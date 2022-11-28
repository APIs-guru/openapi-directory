import { SpeakeasyBase } from "../../../internal/utils";
import { PlatformDifferenceEnum } from "./platformdifferenceenum";
import { UtilizationMetric } from "./utilizationmetric";
/**
 * Describes a recommendation option for an Amazon EC2 instance.
**/
export declare class InstanceRecommendationOption extends SpeakeasyBase {
    instanceType?: string;
    performanceRisk?: number;
    platformDifferences?: PlatformDifferenceEnum[];
    projectedUtilizationMetrics?: UtilizationMetric[];
    rank?: number;
}
