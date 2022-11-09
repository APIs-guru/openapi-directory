import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloudwatchMetricAction
/** 
 * Describes an action that captures a CloudWatch metric.
**/
export class CloudwatchMetricAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=metricName" })
  metricName: string;

  @Metadata({ data: "json, name=metricNamespace" })
  metricNamespace: string;

  @Metadata({ data: "json, name=metricTimestamp" })
  metricTimestamp?: string;

  @Metadata({ data: "json, name=metricUnit" })
  metricUnit: string;

  @Metadata({ data: "json, name=metricValue" })
  metricValue: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;
}
