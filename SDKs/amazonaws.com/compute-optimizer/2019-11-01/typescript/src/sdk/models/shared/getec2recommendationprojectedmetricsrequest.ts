import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RecommendationPreferences } from "./recommendationpreferences";
import { MetricStatisticEnum } from "./metricstatisticenum";


export class GetEc2RecommendationProjectedMetricsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime: Date;

  @Metadata({ data: "json, name=instanceArn" })
  instanceArn: string;

  @Metadata({ data: "json, name=period" })
  period: number;

  @Metadata({ data: "json, name=recommendationPreferences" })
  recommendationPreferences?: RecommendationPreferences;

  @Metadata({ data: "json, name=startTime" })
  startTime: Date;

  @Metadata({ data: "json, name=stat" })
  stat: MetricStatisticEnum;
}
