import { SpeakeasyBase } from "../../../internal/utils";
import { LambdaFunctionRecommendationFindingEnum } from "./lambdafunctionrecommendationfindingenum";
import { LambdaFunctionRecommendationFindingReasonCodeEnum } from "./lambdafunctionrecommendationfindingreasoncodeenum";
import { LambdaFunctionMemoryRecommendationOption } from "./lambdafunctionmemoryrecommendationoption";
import { LambdaFunctionUtilizationMetric } from "./lambdafunctionutilizationmetric";
/**
 * Describes an Lambda function recommendation.
**/
export declare class LambdaFunctionRecommendation extends SpeakeasyBase {
    accountId?: string;
    currentMemorySize?: number;
    finding?: LambdaFunctionRecommendationFindingEnum;
    findingReasonCodes?: LambdaFunctionRecommendationFindingReasonCodeEnum[];
    functionArn?: string;
    functionVersion?: string;
    lastRefreshTimestamp?: Date;
    lookbackPeriodInDays?: number;
    memorySizeRecommendationOptions?: LambdaFunctionMemoryRecommendationOption[];
    numberOfInvocations?: number;
    utilizationMetrics?: LambdaFunctionUtilizationMetric[];
}
