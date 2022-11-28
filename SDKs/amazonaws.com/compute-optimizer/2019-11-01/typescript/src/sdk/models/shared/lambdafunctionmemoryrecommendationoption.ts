import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LambdaFunctionMemoryProjectedMetric } from "./lambdafunctionmemoryprojectedmetric";



// LambdaFunctionMemoryRecommendationOption
/** 
 * Describes a recommendation option for an Lambda function.
**/
export class LambdaFunctionMemoryRecommendationOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=memorySize" })
  memorySize?: number;

  @SpeakeasyMetadata({ data: "json, name=projectedUtilizationMetrics", elemType: LambdaFunctionMemoryProjectedMetric })
  projectedUtilizationMetrics?: LambdaFunctionMemoryProjectedMetric[];

  @SpeakeasyMetadata({ data: "json, name=rank" })
  rank?: number;
}
