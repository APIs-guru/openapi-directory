import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AutoScalingGroupConfiguration } from "./autoscalinggroupconfiguration";
import { FindingEnum } from "./findingenum";
import { AutoScalingGroupRecommendationOption } from "./autoscalinggrouprecommendationoption";
import { UtilizationMetric } from "./utilizationmetric";


// AutoScalingGroupRecommendation
/** 
 * Describes an Auto Scaling group recommendation.
**/
export class AutoScalingGroupRecommendation extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=autoScalingGroupArn" })
  autoScalingGroupArn?: string;

  @Metadata({ data: "json, name=autoScalingGroupName" })
  autoScalingGroupName?: string;

  @Metadata({ data: "json, name=currentConfiguration" })
  currentConfiguration?: AutoScalingGroupConfiguration;

  @Metadata({ data: "json, name=finding" })
  finding?: FindingEnum;

  @Metadata({ data: "json, name=lastRefreshTimestamp" })
  lastRefreshTimestamp?: Date;

  @Metadata({ data: "json, name=lookBackPeriodInDays" })
  lookBackPeriodInDays?: number;

  @Metadata({ data: "json, name=recommendationOptions", elemType: shared.AutoScalingGroupRecommendationOption })
  recommendationOptions?: AutoScalingGroupRecommendationOption[];

  @Metadata({ data: "json, name=utilizationMetrics", elemType: shared.UtilizationMetric })
  utilizationMetrics?: UtilizationMetric[];
}
