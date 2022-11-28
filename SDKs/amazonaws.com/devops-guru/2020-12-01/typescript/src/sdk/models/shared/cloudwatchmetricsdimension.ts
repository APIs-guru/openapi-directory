import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudWatchMetricsDimension
/** 
 *  The dimension of a Amazon CloudWatch metric that is used when DevOps Guru analyzes the resources in your account for operational problems and anomalous behavior. A dimension is a name/value pair that is part of the identity of a metric. A metric can have up to 10 dimensions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Dimension">Dimensions</a> in the <i>Amazon CloudWatch User Guide</i>. 
**/
export class CloudWatchMetricsDimension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
