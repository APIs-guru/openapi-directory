import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecommendedOptionProjectedMetric } from "./recommendedoptionprojectedmetric";



export class GetEc2RecommendationProjectedMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recommendedOptionProjectedMetrics", elemType: RecommendedOptionProjectedMetric })
  recommendedOptionProjectedMetrics?: RecommendedOptionProjectedMetric[];
}
