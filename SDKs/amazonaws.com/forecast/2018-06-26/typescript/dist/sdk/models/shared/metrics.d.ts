import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorMetric } from "./errormetric";
import { WeightedQuantileLoss } from "./weightedquantileloss";
/**
 * Provides metrics that are used to evaluate the performance of a predictor. This object is part of the <a>WindowSummary</a> object.
**/
export declare class Metrics extends SpeakeasyBase {
    averageWeightedQuantileLoss?: number;
    errorMetrics?: ErrorMetric[];
    rmse?: number;
    weightedQuantileLosses?: WeightedQuantileLoss[];
}
