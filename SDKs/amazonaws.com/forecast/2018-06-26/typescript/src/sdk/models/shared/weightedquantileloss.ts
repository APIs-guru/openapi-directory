import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WeightedQuantileLoss
/** 
 * The weighted loss value for a quantile. This object is part of the <a>Metrics</a> object.
**/
export class WeightedQuantileLoss extends SpeakeasyBase {
  @Metadata({ data: "json, name=LossValue" })
  lossValue?: number;

  @Metadata({ data: "json, name=Quantile" })
  quantile?: number;
}
