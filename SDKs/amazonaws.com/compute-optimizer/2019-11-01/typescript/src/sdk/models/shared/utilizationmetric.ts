import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricNameEnum } from "./metricnameenum";
import { MetricStatisticEnum } from "./metricstatisticenum";



// UtilizationMetric
/** 
 * <p>Describes a utilization metric of a resource, such as an Amazon EC2 instance.</p> <p>Compare the utilization metric data of your resource against its projected utilization metric data to determine the performance difference between your current resource and the recommended option.</p>
**/
export class UtilizationMetric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: MetricNameEnum;

  @SpeakeasyMetadata({ data: "json, name=statistic" })
  statistic?: MetricStatisticEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
