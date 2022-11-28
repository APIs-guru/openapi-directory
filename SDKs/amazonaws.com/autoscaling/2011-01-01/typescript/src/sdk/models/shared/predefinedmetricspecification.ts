import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricTypeEnum } from "./metrictypeenum";



// PredefinedMetricSpecification
/** 
 * Represents a predefined metric for a target tracking scaling policy to use with Amazon EC2 Auto Scaling.
**/
export class PredefinedMetricSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata()
  predefinedMetricType: MetricTypeEnum;

  @SpeakeasyMetadata()
  resourceLabel?: string;
}
