import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RecommendedOptionProjectedMetric } from "./recommendedoptionprojectedmetric";


export class GetEc2RecommendationProjectedMetricsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=recommendedOptionProjectedMetrics", elemType: shared.RecommendedOptionProjectedMetric })
  recommendedOptionProjectedMetrics?: RecommendedOptionProjectedMetric[];
}
