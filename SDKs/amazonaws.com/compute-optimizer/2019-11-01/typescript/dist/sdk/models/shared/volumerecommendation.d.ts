import { SpeakeasyBase } from "../../../internal/utils";
import { VolumeConfiguration } from "./volumeconfiguration";
import { EbsFindingEnum } from "./ebsfindingenum";
import { EbsUtilizationMetric } from "./ebsutilizationmetric";
import { VolumeRecommendationOption } from "./volumerecommendationoption";
/**
 * Describes an Amazon Elastic Block Store (Amazon EBS) volume recommendation.
**/
export declare class VolumeRecommendation extends SpeakeasyBase {
    accountId?: string;
    currentConfiguration?: VolumeConfiguration;
    finding?: EbsFindingEnum;
    lastRefreshTimestamp?: Date;
    lookBackPeriodInDays?: number;
    utilizationMetrics?: EbsUtilizationMetric[];
    volumeArn?: string;
    volumeRecommendationOptions?: VolumeRecommendationOption[];
}
