import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScalingMetricTypeEnum } from "./scalingmetrictypeenum";



// PredefinedScalingMetricSpecification
/** 
 * Represents a predefined metric that can be used for dynamic scaling as part of a target tracking scaling policy.
**/
export class PredefinedScalingMetricSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PredefinedScalingMetricType" })
  predefinedScalingMetricType: ScalingMetricTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ResourceLabel" })
  resourceLabel?: string;
}
