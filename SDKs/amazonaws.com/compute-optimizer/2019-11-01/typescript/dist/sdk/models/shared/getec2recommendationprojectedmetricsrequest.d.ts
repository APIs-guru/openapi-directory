import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RecommendationPreferences } from "./recommendationpreferences";
import { MetricStatisticEnum } from "./metricstatisticenum";
export declare class GetEc2RecommendationProjectedMetricsRequest extends SpeakeasyBase {
    endTime: Date;
    instanceArn: string;
    period: number;
    recommendationPreferences?: RecommendationPreferences;
    startTime: Date;
    stat: MetricStatisticEnum;
}
