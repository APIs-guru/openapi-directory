import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=currentInstanceType" })
  currentInstanceType?: string;

  @Metadata({ data: "json, name=finding" })
  finding?: FindingEnum;

  @Metadata({ data: "json, name=findingReasonCodes" })
  findingReasonCodes?: InstanceRecommendationFindingReasonCodeEnum[];

  @Metadata({ data: "json, name=instanceArn" })
  instanceArn?: string;

  @Metadata({ data: "json, name=instanceName" })
  instanceName?: string;

  @Metadata({ data: "json, name=lastRefreshTimestamp" })
  lastRefreshTimestamp?: Date;

  @Metadata({ data: "json, name=lookBackPeriodInDays" })
  lookBackPeriodInDays?: number;

  @Metadata({ data: "json, name=recommendationOptions", elemType: shared.InstanceRecommendationOption })
  recommendationOptions?: InstanceRecommendationOption[];

  @Metadata({ data: "json, name=recommendationSources", elemType: shared.RecommendationSource })
  recommendationSources?: RecommendationSource[];

  @Metadata({ data: "json, name=utilizationMetrics", elemType: shared.UtilizationMetric })
  utilizationMetrics?: UtilizationMetric[];
}
