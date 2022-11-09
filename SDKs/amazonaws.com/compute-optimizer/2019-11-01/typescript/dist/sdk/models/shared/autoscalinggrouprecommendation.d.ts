import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoScalingGroupConfiguration } from "./autoscalinggroupconfiguration";
import { FindingEnum } from "./findingenum";
import { AutoScalingGroupRecommendationOption } from "./autoscalinggrouprecommendationoption";
import { UtilizationMetric } from "./utilizationmetric";
/**
 * Describes an Auto Scaling group recommendation.
**/
export declare class AutoScalingGroupRecommendation extends SpeakeasyBase {
    accountId?: string;
    autoScalingGroupArn?: string;
    autoScalingGroupName?: string;
    currentConfiguration?: AutoScalingGroupConfiguration;
    finding?: FindingEnum;
    lastRefreshTimestamp?: Date;
    lookBackPeriodInDays?: number;
    recommendationOptions?: AutoScalingGroupRecommendationOption[];
    utilizationMetrics?: UtilizationMetric[];
}
