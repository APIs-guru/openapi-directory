import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LambdaFunctionMemoryProjectedMetric } from "./lambdafunctionmemoryprojectedmetric";


// LambdaFunctionMemoryRecommendationOption
/** 
 * Describes a recommendation option for an Lambda function.
**/
export class LambdaFunctionMemoryRecommendationOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=memorySize" })
  memorySize?: number;

  @Metadata({ data: "json, name=projectedUtilizationMetrics", elemType: shared.LambdaFunctionMemoryProjectedMetric })
  projectedUtilizationMetrics?: LambdaFunctionMemoryProjectedMetric[];

  @Metadata({ data: "json, name=rank" })
  rank?: number;
}
