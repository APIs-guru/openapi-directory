import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudWatchMetricsDetail } from "./cloudwatchmetricsdetail";
/**
 *  Details about the source of the anomalous operational data that triggered the anomaly. The one supported source is Amazon CloudWatch metrics.
**/
export declare class AnomalySourceDetails extends SpeakeasyBase {
    cloudWatchMetrics?: CloudWatchMetricsDetail[];
}
