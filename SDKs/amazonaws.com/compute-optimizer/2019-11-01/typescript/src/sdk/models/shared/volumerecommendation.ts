import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VolumeConfiguration } from "./volumeconfiguration";
import { EbsFindingEnum } from "./ebsfindingenum";
import { EbsUtilizationMetric } from "./ebsutilizationmetric";
import { VolumeRecommendationOption } from "./volumerecommendationoption";



// VolumeRecommendation
/** 
 * Describes an Amazon Elastic Block Store (Amazon EBS) volume recommendation.
**/
export class VolumeRecommendation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=currentConfiguration" })
  currentConfiguration?: VolumeConfiguration;

  @SpeakeasyMetadata({ data: "json, name=finding" })
  finding?: EbsFindingEnum;

  @SpeakeasyMetadata({ data: "json, name=lastRefreshTimestamp" })
  lastRefreshTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=lookBackPeriodInDays" })
  lookBackPeriodInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=utilizationMetrics", elemType: EbsUtilizationMetric })
  utilizationMetrics?: EbsUtilizationMetric[];

  @SpeakeasyMetadata({ data: "json, name=volumeArn" })
  volumeArn?: string;

  @SpeakeasyMetadata({ data: "json, name=volumeRecommendationOptions", elemType: VolumeRecommendationOption })
  volumeRecommendationOptions?: VolumeRecommendationOption[];
}
