import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MetricNameEnum } from "./metricnameenum";
import { MetricStatisticEnum } from "./metricstatisticenum";


// UtilizationMetric
/** 
 * <p>Describes a utilization metric of a resource, such as an Amazon EC2 instance.</p> <p>Compare the utilization metric data of your resource against its projected utilization metric data to determine the performance difference between your current resource and the recommended option.</p>
**/
export class UtilizationMetric extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: MetricNameEnum;

  @Metadata({ data: "json, name=statistic" })
  statistic?: MetricStatisticEnum;

  @Metadata({ data: "json, name=value" })
  value?: number;
}
