import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Provides detailed error metrics to evaluate the performance of a predictor. This object is part of the <a>Metrics</a> object.
**/
export declare class ErrorMetric extends SpeakeasyBase {
    forecastType?: string;
    mape?: number;
    mase?: number;
    rmse?: number;
    wape?: number;
}
