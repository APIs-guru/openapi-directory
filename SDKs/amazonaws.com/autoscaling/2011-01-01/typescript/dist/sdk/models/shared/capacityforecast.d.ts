import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A <code>GetPredictiveScalingForecast</code> call returns the capacity forecast for a predictive scaling policy. This structure includes the data points for that capacity forecast, along with the timestamps of those data points.
**/
export declare class CapacityForecast extends SpeakeasyBase {
    timestamps: Date[];
    values: number[];
}
