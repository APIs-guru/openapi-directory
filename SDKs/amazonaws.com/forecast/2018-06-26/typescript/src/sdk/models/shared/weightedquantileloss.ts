import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WeightedQuantileLoss
/** 
 * The weighted loss value for a quantile. This object is part of the <a>Metrics</a> object.
**/
export class WeightedQuantileLoss extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LossValue" })
  lossValue?: number;

  @SpeakeasyMetadata({ data: "json, name=Quantile" })
  quantile?: number;
}
