import { SpeakeasyBase } from "../../../internal/utils";
import { CustomizedMetricSpecification } from "./customizedmetricspecification";
import { PredefinedMetricSpecification } from "./predefinedmetricspecification";
/**
 * Represents a target tracking scaling policy configuration to use with Amazon EC2 Auto Scaling.
**/
export declare class TargetTrackingConfiguration extends SpeakeasyBase {
    customizedMetricSpecification?: CustomizedMetricSpecification;
    disableScaleIn?: boolean;
    predefinedMetricSpecification?: PredefinedMetricSpecification;
    targetValue: number;
}
