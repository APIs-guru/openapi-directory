import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CloudWatchMetricsDimension } from "./cloudwatchmetricsdimension";
import { CloudWatchMetricsStatEnum } from "./cloudwatchmetricsstatenum";


// CloudWatchMetricsDetail
/** 
 *  Information about an Amazon CloudWatch metric. 
**/
export class CloudWatchMetricsDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=Dimensions", elemType: shared.CloudWatchMetricsDimension })
  dimensions?: CloudWatchMetricsDimension[];

  @Metadata({ data: "json, name=MetricName" })
  metricName?: string;

  @Metadata({ data: "json, name=Namespace" })
  namespace?: string;

  @Metadata({ data: "json, name=Period" })
  period?: number;

  @Metadata({ data: "json, name=Stat" })
  stat?: CloudWatchMetricsStatEnum;

  @Metadata({ data: "json, name=Unit" })
  unit?: string;
}
