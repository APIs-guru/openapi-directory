import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricDimension } from "./metricdimension";
import { MetricStatisticEnum } from "./metricstatisticenum";



// CustomizedScalingMetricSpecification
/** 
 * <p>Represents a CloudWatch metric of your choosing that can be used for dynamic scaling as part of a target tracking scaling policy. </p> <p>To create your customized scaling metric specification:</p> <ul> <li> <p>Add values for each required parameter from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publish Custom Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </li> <li> <p>Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases. </p> </li> </ul> <p>For information about terminology, available metrics, or how to publish new metrics, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch Concepts</a> in the <i>Amazon CloudWatch User Guide</i>. </p>
**/
export class CustomizedScalingMetricSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Dimensions", elemType: MetricDimension })
  dimensions?: MetricDimension[];

  @SpeakeasyMetadata({ data: "json, name=MetricName" })
  metricName: string;

  @SpeakeasyMetadata({ data: "json, name=Namespace" })
  namespace: string;

  @SpeakeasyMetadata({ data: "json, name=Statistic" })
  statistic: MetricStatisticEnum;

  @SpeakeasyMetadata({ data: "json, name=Unit" })
  unit?: string;
}
