import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricTypeEnum } from "./metrictypeenum";



// PredefinedMetricSpecification
/** 
 * <p>Represents a predefined metric for a target tracking scaling policy to use with Application Auto Scaling.</p> <p>Only the Amazon Web Services that you're using send metrics to Amazon CloudWatch. To determine whether a desired metric already exists by looking up its namespace and dimension using the CloudWatch metrics dashboard in the console, follow the procedure in <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/monitoring-cloudwatch.html">Building dashboards with CloudWatch</a> in the <i>Application Auto Scaling User Guide</i>.</p>
**/
export class PredefinedMetricSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PredefinedMetricType" })
  predefinedMetricType: MetricTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ResourceLabel" })
  resourceLabel?: string;
}
