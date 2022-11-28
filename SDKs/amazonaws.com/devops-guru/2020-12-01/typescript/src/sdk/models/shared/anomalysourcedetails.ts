import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchMetricsDetail } from "./cloudwatchmetricsdetail";



// AnomalySourceDetails
/** 
 *  Details about the source of the anomalous operational data that triggered the anomaly. The one supported source is Amazon CloudWatch metrics. 
**/
export class AnomalySourceDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudWatchMetrics", elemType: CloudWatchMetricsDetail })
  cloudWatchMetrics?: CloudWatchMetricsDetail[];
}
