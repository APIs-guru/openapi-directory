import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ErrorMetric
/** 
 *  Provides detailed error metrics to evaluate the performance of a predictor. This object is part of the <a>Metrics</a> object. 
**/
export class ErrorMetric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ForecastType" })
  forecastType?: string;

  @SpeakeasyMetadata({ data: "json, name=MAPE" })
  mape?: number;

  @SpeakeasyMetadata({ data: "json, name=MASE" })
  mase?: number;

  @SpeakeasyMetadata({ data: "json, name=RMSE" })
  rmse?: number;

  @SpeakeasyMetadata({ data: "json, name=WAPE" })
  wape?: number;
}
