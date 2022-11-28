import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomizedMetricSpecification } from "./customizedmetricspecification";
import { PredefinedMetricSpecification } from "./predefinedmetricspecification";



// TargetTrackingConfiguration
/** 
 * Represents a target tracking scaling policy configuration to use with Amazon EC2 Auto Scaling.
**/
export class TargetTrackingConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  customizedMetricSpecification?: CustomizedMetricSpecification;

  @SpeakeasyMetadata()
  disableScaleIn?: boolean;

  @SpeakeasyMetadata()
  predefinedMetricSpecification?: PredefinedMetricSpecification;

  @SpeakeasyMetadata()
  targetValue: number;
}
