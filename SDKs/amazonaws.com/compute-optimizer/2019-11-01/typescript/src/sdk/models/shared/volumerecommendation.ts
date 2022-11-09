import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VolumeConfiguration } from "./volumeconfiguration";
import { EbsFindingEnum } from "./ebsfindingenum";
import { EbsUtilizationMetric } from "./ebsutilizationmetric";
import { VolumeRecommendationOption } from "./volumerecommendationoption";


// VolumeRecommendation
/** 
 * Describes an Amazon Elastic Block Store (Amazon EBS) volume recommendation.
**/
export class VolumeRecommendation extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=currentConfiguration" })
  currentConfiguration?: VolumeConfiguration;

  @Metadata({ data: "json, name=finding" })
  finding?: EbsFindingEnum;

  @Metadata({ data: "json, name=lastRefreshTimestamp" })
  lastRefreshTimestamp?: Date;

  @Metadata({ data: "json, name=lookBackPeriodInDays" })
  lookBackPeriodInDays?: number;

  @Metadata({ data: "json, name=utilizationMetrics", elemType: shared.EbsUtilizationMetric })
  utilizationMetrics?: EbsUtilizationMetric[];

  @Metadata({ data: "json, name=volumeArn" })
  volumeArn?: string;

  @Metadata({ data: "json, name=volumeRecommendationOptions", elemType: shared.VolumeRecommendationOption })
  volumeRecommendationOptions?: VolumeRecommendationOption[];
}
