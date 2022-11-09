import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ErrorMetric } from "./errormetric";
import { WeightedQuantileLoss } from "./weightedquantileloss";


// Metrics
/** 
 * Provides metrics that are used to evaluate the performance of a predictor. This object is part of the <a>WindowSummary</a> object.
**/
export class Metrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=AverageWeightedQuantileLoss" })
  averageWeightedQuantileLoss?: number;

  @Metadata({ data: "json, name=ErrorMetrics", elemType: shared.ErrorMetric })
  errorMetrics?: ErrorMetric[];

  @Metadata({ data: "json, name=RMSE" })
  rmse?: number;

  @Metadata({ data: "json, name=WeightedQuantileLosses", elemType: shared.WeightedQuantileLoss })
  weightedQuantileLosses?: WeightedQuantileLoss[];
}
