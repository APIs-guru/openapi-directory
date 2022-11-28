import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionValueOperatorEnum } from "./dimensionvalueoperatorenum";



// MetricDimension
/** 
 * The dimension of a metric.
**/
export class MetricDimension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionName" })
  dimensionName: string;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator?: DimensionValueOperatorEnum;
}
