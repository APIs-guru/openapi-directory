import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EbsMetricNameEnum } from "./ebsmetricnameenum";
import { MetricStatisticEnum } from "./metricstatisticenum";


// EbsUtilizationMetric
/** 
 * <p>Describes a utilization metric of an Amazon Elastic Block Store (Amazon EBS) volume.</p> <p>Compare the utilization metric data of your resource against its projected utilization metric data to determine the performance difference between your current resource and the recommended option.</p>
**/
export class EbsUtilizationMetric extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: EbsMetricNameEnum;

  @Metadata({ data: "json, name=statistic" })
  statistic?: MetricStatisticEnum;

  @Metadata({ data: "json, name=value" })
  value?: number;
}
