import { SpeakeasyBase } from "../../../internal/utils";
import { MetricTypeEnum } from "./metrictypeenum";
/**
 * Represents a predefined metric for a target tracking scaling policy to use with Amazon EC2 Auto Scaling.
**/
export declare class PredefinedMetricSpecification extends SpeakeasyBase {
    predefinedMetricType: MetricTypeEnum;
    resourceLabel?: string;
}
