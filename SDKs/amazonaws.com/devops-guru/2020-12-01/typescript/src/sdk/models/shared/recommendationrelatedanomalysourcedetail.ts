import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RecommendationRelatedCloudWatchMetricsSourceDetail } from "./recommendationrelatedcloudwatchmetricssourcedetail";


// RecommendationRelatedAnomalySourceDetail
/** 
 *  Contains an array of <code>RecommendationRelatedCloudWatchMetricsSourceDetail</code> objects that contain the name and namespace of an Amazon CloudWatch metric. 
**/
export class RecommendationRelatedAnomalySourceDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudWatchMetrics", elemType: shared.RecommendationRelatedCloudWatchMetricsSourceDetail })
  cloudWatchMetrics?: RecommendationRelatedCloudWatchMetricsSourceDetail[];
}
