import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LambdaFunctionRecommendationFindingEnum } from "./lambdafunctionrecommendationfindingenum";
import { LambdaFunctionRecommendationFindingReasonCodeEnum } from "./lambdafunctionrecommendationfindingreasoncodeenum";
import { LambdaFunctionMemoryRecommendationOption } from "./lambdafunctionmemoryrecommendationoption";
import { LambdaFunctionUtilizationMetric } from "./lambdafunctionutilizationmetric";



// LambdaFunctionRecommendation
/** 
 * Describes an Lambda function recommendation.
**/
export class LambdaFunctionRecommendation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=currentMemorySize" })
  currentMemorySize?: number;

  @SpeakeasyMetadata({ data: "json, name=finding" })
  finding?: LambdaFunctionRecommendationFindingEnum;

  @SpeakeasyMetadata({ data: "json, name=findingReasonCodes" })
  findingReasonCodes?: LambdaFunctionRecommendationFindingReasonCodeEnum[];

  @SpeakeasyMetadata({ data: "json, name=functionArn" })
  functionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=functionVersion" })
  functionVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=lastRefreshTimestamp" })
  lastRefreshTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=lookbackPeriodInDays" })
  lookbackPeriodInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=memorySizeRecommendationOptions", elemType: LambdaFunctionMemoryRecommendationOption })
  memorySizeRecommendationOptions?: LambdaFunctionMemoryRecommendationOption[];

  @SpeakeasyMetadata({ data: "json, name=numberOfInvocations" })
  numberOfInvocations?: number;

  @SpeakeasyMetadata({ data: "json, name=utilizationMetrics", elemType: LambdaFunctionUtilizationMetric })
  utilizationMetrics?: LambdaFunctionUtilizationMetric[];
}
