import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecommendationPreferences } from "./recommendationpreferences";
import { MetricStatisticEnum } from "./metricstatisticenum";



export class GetEc2RecommendationProjectedMetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime: Date;

  @SpeakeasyMetadata({ data: "json, name=instanceArn" })
  instanceArn: string;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period: number;

  @SpeakeasyMetadata({ data: "json, name=recommendationPreferences" })
  recommendationPreferences?: RecommendationPreferences;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime: Date;

  @SpeakeasyMetadata({ data: "json, name=stat" })
  stat: MetricStatisticEnum;
}
