import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValueOperatorEnum } from "./dimensionvalueoperatorenum";
/**
 * The dimension of a metric.
**/
export declare class MetricDimension extends SpeakeasyBase {
    dimensionName: string;
    operator?: DimensionValueOperatorEnum;
}
