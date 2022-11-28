import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingGroupConfiguration } from "./autoscalinggroupconfiguration";
import { FindingEnum } from "./findingenum";
import { AutoScalingGroupRecommendationOption } from "./autoscalinggrouprecommendationoption";
import { UtilizationMetric } from "./utilizationmetric";



// AutoScalingGroupRecommendation
/** 
 * Describes an Auto Scaling group recommendation.
**/
export class AutoScalingGroupRecommendation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=autoScalingGroupArn" })
  autoScalingGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=autoScalingGroupName" })
  autoScalingGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=currentConfiguration" })
  currentConfiguration?: AutoScalingGroupConfiguration;

  @SpeakeasyMetadata({ data: "json, name=finding" })
  finding?: FindingEnum;

  @SpeakeasyMetadata({ data: "json, name=lastRefreshTimestamp" })
  lastRefreshTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=lookBackPeriodInDays" })
  lookBackPeriodInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=recommendationOptions", elemType: AutoScalingGroupRecommendationOption })
  recommendationOptions?: AutoScalingGroupRecommendationOption[];

  @SpeakeasyMetadata({ data: "json, name=utilizationMetrics", elemType: UtilizationMetric })
  utilizationMetrics?: UtilizationMetric[];
}
