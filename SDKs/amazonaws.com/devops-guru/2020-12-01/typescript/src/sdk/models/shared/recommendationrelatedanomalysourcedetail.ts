import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecommendationRelatedCloudWatchMetricsSourceDetail } from "./recommendationrelatedcloudwatchmetricssourcedetail";



// RecommendationRelatedAnomalySourceDetail
/** 
 *  Contains an array of <code>RecommendationRelatedCloudWatchMetricsSourceDetail</code> objects that contain the name and namespace of an Amazon CloudWatch metric. 
**/
export class RecommendationRelatedAnomalySourceDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudWatchMetrics", elemType: RecommendationRelatedCloudWatchMetricsSourceDetail })
  cloudWatchMetrics?: RecommendationRelatedCloudWatchMetricsSourceDetail[];
}
