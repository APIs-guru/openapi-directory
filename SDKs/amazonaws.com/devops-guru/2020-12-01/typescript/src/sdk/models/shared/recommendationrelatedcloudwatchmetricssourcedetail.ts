import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RecommendationRelatedCloudWatchMetricsSourceDetail
/** 
 *  Information about an Amazon CloudWatch metric that is analyzed by DevOps Guru. It is one of many analyzed metrics that are used to generate insights. 
**/
export class RecommendationRelatedCloudWatchMetricsSourceDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=MetricName" })
  metricName?: string;

  @Metadata({ data: "json, name=Namespace" })
  namespace?: string;
}
