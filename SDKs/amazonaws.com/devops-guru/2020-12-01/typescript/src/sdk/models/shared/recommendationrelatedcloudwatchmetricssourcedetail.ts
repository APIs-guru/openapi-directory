import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RecommendationRelatedCloudWatchMetricsSourceDetail
/** 
 *  Information about an Amazon CloudWatch metric that is analyzed by DevOps Guru. It is one of many analyzed metrics that are used to generate insights. 
**/
export class RecommendationRelatedCloudWatchMetricsSourceDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MetricName" })
  metricName?: string;

  @SpeakeasyMetadata({ data: "json, name=Namespace" })
  namespace?: string;
}
