import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudWatchMetricsDimension } from "./cloudwatchmetricsdimension";
import { CloudWatchMetricsStatEnum } from "./cloudwatchmetricsstatenum";
/**
 *  Information about an Amazon CloudWatch metric.
**/
export declare class CloudWatchMetricsDetail extends SpeakeasyBase {
    dimensions?: CloudWatchMetricsDimension[];
    metricName?: string;
    namespace?: string;
    period?: number;
    stat?: CloudWatchMetricsStatEnum;
    unit?: string;
}
