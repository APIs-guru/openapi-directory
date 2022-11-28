import { SpeakeasyBase } from "../../../internal/utils";
import { PredictiveScalingMetricSpecification } from "./predictivescalingmetricspecification";
/**
 * A <code>GetPredictiveScalingForecast</code> call returns the load forecast for a predictive scaling policy. This structure includes the data points for that load forecast, along with the timestamps of those data points and the metric specification.
**/
export declare class LoadForecast extends SpeakeasyBase {
    metricSpecification: PredictiveScalingMetricSpecification;
    timestamps: Date[];
    values: number[];
}
