import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchMetricsDimension } from "./cloudwatchmetricsdimension";
import { CloudWatchMetricsStatEnum } from "./cloudwatchmetricsstatenum";



// CloudWatchMetricsDetail
/** 
 *  Information about an Amazon CloudWatch metric. 
**/
export class CloudWatchMetricsDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Dimensions", elemType: CloudWatchMetricsDimension })
  dimensions?: CloudWatchMetricsDimension[];

  @SpeakeasyMetadata({ data: "json, name=MetricName" })
  metricName?: string;

  @SpeakeasyMetadata({ data: "json, name=Namespace" })
  namespace?: string;

  @SpeakeasyMetadata({ data: "json, name=Period" })
  period?: number;

  @SpeakeasyMetadata({ data: "json, name=Stat" })
  stat?: CloudWatchMetricsStatEnum;

  @SpeakeasyMetadata({ data: "json, name=Unit" })
  unit?: string;
}
