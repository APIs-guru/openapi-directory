import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LambdaFunctionMemoryProjectedMetric } from "./lambdafunctionmemoryprojectedmetric";
/**
 * Describes a recommendation option for an Lambda function.
**/
export declare class LambdaFunctionMemoryRecommendationOption extends SpeakeasyBase {
    memorySize?: number;
    projectedUtilizationMetrics?: LambdaFunctionMemoryProjectedMetric[];
    rank?: number;
}
