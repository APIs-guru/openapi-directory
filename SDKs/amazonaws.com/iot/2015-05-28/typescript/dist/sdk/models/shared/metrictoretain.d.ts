import { SpeakeasyBase } from "../../../internal/utils";
import { MetricDimension } from "./metricdimension";
/**
 * The metric you want to retain. Dimensions are optional.
**/
export declare class MetricToRetain extends SpeakeasyBase {
    metric: string;
    metricDimension?: MetricDimension;
}
