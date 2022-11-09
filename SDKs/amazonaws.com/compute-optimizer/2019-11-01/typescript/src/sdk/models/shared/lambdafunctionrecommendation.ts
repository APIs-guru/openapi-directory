import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LambdaFunctionRecommendationFindingEnum } from "./lambdafunctionrecommendationfindingenum";
import { LambdaFunctionRecommendationFindingReasonCodeEnum } from "./lambdafunctionrecommendationfindingreasoncodeenum";
import { LambdaFunctionMemoryRecommendationOption } from "./lambdafunctionmemoryrecommendationoption";
import { LambdaFunctionUtilizationMetric } from "./lambdafunctionutilizationmetric";


// LambdaFunctionRecommendation
/** 
 * Describes an Lambda function recommendation.
**/
export class LambdaFunctionRecommendation extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=currentMemorySize" })
  currentMemorySize?: number;

  @Metadata({ data: "json, name=finding" })
  finding?: LambdaFunctionRecommendationFindingEnum;

  @Metadata({ data: "json, name=findingReasonCodes" })
  findingReasonCodes?: LambdaFunctionRecommendationFindingReasonCodeEnum[];

  @Metadata({ data: "json, name=functionArn" })
  functionArn?: string;

  @Metadata({ data: "json, name=functionVersion" })
  functionVersion?: string;

  @Metadata({ data: "json, name=lastRefreshTimestamp" })
  lastRefreshTimestamp?: Date;

  @Metadata({ data: "json, name=lookbackPeriodInDays" })
  lookbackPeriodInDays?: number;

  @Metadata({ data: "json, name=memorySizeRecommendationOptions", elemType: shared.LambdaFunctionMemoryRecommendationOption })
  memorySizeRecommendationOptions?: LambdaFunctionMemoryRecommendationOption[];

  @Metadata({ data: "json, name=numberOfInvocations" })
  numberOfInvocations?: number;

  @Metadata({ data: "json, name=utilizationMetrics", elemType: shared.LambdaFunctionUtilizationMetric })
  utilizationMetrics?: LambdaFunctionUtilizationMetric[];
}
