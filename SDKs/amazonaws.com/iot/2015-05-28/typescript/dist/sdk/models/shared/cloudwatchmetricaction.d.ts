import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an action that captures a CloudWatch metric.
**/
export declare class CloudwatchMetricAction extends SpeakeasyBase {
    metricName: string;
    metricNamespace: string;
    metricTimestamp?: string;
    metricUnit: string;
    metricValue: string;
    roleArn: string;
}
