import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ScalingMetricTypeEnum } from "./scalingmetrictypeenum";


// PredefinedScalingMetricSpecification
/** 
 * Represents a predefined metric that can be used for dynamic scaling as part of a target tracking scaling policy.
**/
export class PredefinedScalingMetricSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=PredefinedScalingMetricType" })
  predefinedScalingMetricType: ScalingMetricTypeEnum;

  @Metadata({ data: "json, name=ResourceLabel" })
  resourceLabel?: string;
}
