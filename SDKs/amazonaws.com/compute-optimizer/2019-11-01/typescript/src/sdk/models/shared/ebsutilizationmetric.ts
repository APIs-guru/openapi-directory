import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EbsMetricNameEnum } from "./ebsmetricnameenum";
import { MetricStatisticEnum } from "./metricstatisticenum";



// EbsUtilizationMetric
/** 
 * <p>Describes a utilization metric of an Amazon Elastic Block Store (Amazon EBS) volume.</p> <p>Compare the utilization metric data of your resource against its projected utilization metric data to determine the performance difference between your current resource and the recommended option.</p>
**/
export class EbsUtilizationMetric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: EbsMetricNameEnum;

  @SpeakeasyMetadata({ data: "json, name=statistic" })
  statistic?: MetricStatisticEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
