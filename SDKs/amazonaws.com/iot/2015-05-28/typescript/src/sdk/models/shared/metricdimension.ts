import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DimensionValueOperatorEnum } from "./dimensionvalueoperatorenum";


// MetricDimension
/** 
 * The dimension of a metric.
**/
export class MetricDimension extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensionName" })
  dimensionName: string;

  @Metadata({ data: "json, name=operator" })
  operator?: DimensionValueOperatorEnum;
}
