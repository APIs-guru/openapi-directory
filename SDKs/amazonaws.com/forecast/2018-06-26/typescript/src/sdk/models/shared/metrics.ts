import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorMetric } from "./errormetric";
import { WeightedQuantileLoss } from "./weightedquantileloss";



// Metrics
/** 
 * Provides metrics that are used to evaluate the performance of a predictor. This object is part of the <a>WindowSummary</a> object.
**/
export class Metrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AverageWeightedQuantileLoss" })
  averageWeightedQuantileLoss?: number;

  @SpeakeasyMetadata({ data: "json, name=ErrorMetrics", elemType: ErrorMetric })
  errorMetrics?: ErrorMetric[];

  @SpeakeasyMetadata({ data: "json, name=RMSE" })
  rmse?: number;

  @SpeakeasyMetadata({ data: "json, name=WeightedQuantileLosses", elemType: WeightedQuantileLoss })
  weightedQuantileLosses?: WeightedQuantileLoss[];
}
