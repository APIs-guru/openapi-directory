import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CloudWatchMetricsDetail } from "./cloudwatchmetricsdetail";


// AnomalySourceDetails
/** 
 *  Details about the source of the anomalous operational data that triggered the anomaly. The one supported source is Amazon CloudWatch metrics. 
**/
export class AnomalySourceDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudWatchMetrics", elemType: shared.CloudWatchMetricsDetail })
  cloudWatchMetrics?: CloudWatchMetricsDetail[];
}
