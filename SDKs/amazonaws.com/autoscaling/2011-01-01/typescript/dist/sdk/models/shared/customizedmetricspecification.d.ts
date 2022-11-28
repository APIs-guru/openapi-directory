import { SpeakeasyBase } from "../../../internal/utils";
import { MetricDimension } from "./metricdimension";
import { MetricStatisticEnum } from "./metricstatisticenum";
/**
 * <p>Represents a CloudWatch metric of your choosing for a target tracking scaling policy to use with Amazon EC2 Auto Scaling.</p> <p>To create your customized metric specification:</p> <ul> <li> <p>Add values for each required parameter from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publish Custom Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </li> <li> <p>Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases.</p> </li> </ul> <p>For more information about CloudWatch, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch Concepts</a>.</p>
**/
export declare class CustomizedMetricSpecification extends SpeakeasyBase {
    dimensions?: MetricDimension[];
    metricName: string;
    namespace: string;
    statistic: MetricStatisticEnum;
    unit?: string;
}
