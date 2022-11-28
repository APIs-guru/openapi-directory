import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudwatchMetricAction
/** 
 * Describes an action that captures a CloudWatch metric.
**/
export class CloudwatchMetricAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metricName" })
  metricName: string;

  @SpeakeasyMetadata({ data: "json, name=metricNamespace" })
  metricNamespace: string;

  @SpeakeasyMetadata({ data: "json, name=metricTimestamp" })
  metricTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=metricUnit" })
  metricUnit: string;

  @SpeakeasyMetadata({ data: "json, name=metricValue" })
  metricValue: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;
}
