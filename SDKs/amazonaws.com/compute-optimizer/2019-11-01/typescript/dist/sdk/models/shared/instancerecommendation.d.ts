import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FindingEnum } from "./findingenum";
import { InstanceRecommendationFindingReasonCodeEnum } from "./instancerecommendationfindingreasoncodeenum";
import { InstanceRecommendationOption } from "./instancerecommendationoption";
import { RecommendationSource } from "./recommendationsource";
import { UtilizationMetric } from "./utilizationmetric";
/**
 * Describes an Amazon EC2 instance recommendation.
**/
export declare class InstanceRecommendation extends SpeakeasyBase {
    accountId?: string;
    currentInstanceType?: string;
    finding?: FindingEnum;
    findingReasonCodes?: InstanceRecommendationFindingReasonCodeEnum[];
    instanceArn?: string;
    instanceName?: string;
    lastRefreshTimestamp?: Date;
    lookBackPeriodInDays?: number;
    recommendationOptions?: InstanceRecommendationOption[];
    recommendationSources?: RecommendationSource[];
    utilizationMetrics?: UtilizationMetric[];
}
