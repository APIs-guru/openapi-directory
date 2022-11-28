import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FindingEnum } from "./findingenum";
import { InstanceRecommendationFindingReasonCodeEnum } from "./instancerecommendationfindingreasoncodeenum";
import { InstanceRecommendationOption } from "./instancerecommendationoption";
import { RecommendationSource } from "./recommendationsource";
import { UtilizationMetric } from "./utilizationmetric";



// InstanceRecommendation
/** 
 * Describes an Amazon EC2 instance recommendation.
**/
export class InstanceRecommendation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=currentInstanceType" })
  currentInstanceType?: string;

  @SpeakeasyMetadata({ data: "json, name=finding" })
  finding?: FindingEnum;

  @SpeakeasyMetadata({ data: "json, name=findingReasonCodes" })
  findingReasonCodes?: InstanceRecommendationFindingReasonCodeEnum[];

  @SpeakeasyMetadata({ data: "json, name=instanceArn" })
  instanceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceName" })
  instanceName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastRefreshTimestamp" })
  lastRefreshTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=lookBackPeriodInDays" })
  lookBackPeriodInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=recommendationOptions", elemType: InstanceRecommendationOption })
  recommendationOptions?: InstanceRecommendationOption[];

  @SpeakeasyMetadata({ data: "json, name=recommendationSources", elemType: RecommendationSource })
  recommendationSources?: RecommendationSource[];

  @SpeakeasyMetadata({ data: "json, name=utilizationMetrics", elemType: UtilizationMetric })
  utilizationMetrics?: UtilizationMetric[];
}
