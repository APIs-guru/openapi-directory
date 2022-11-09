import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ErrorMetric
/** 
 *  Provides detailed error metrics to evaluate the performance of a predictor. This object is part of the <a>Metrics</a> object. 
**/
export class ErrorMetric extends SpeakeasyBase {
  @Metadata({ data: "json, name=ForecastType" })
  forecastType?: string;

  @Metadata({ data: "json, name=MAPE" })
  mape?: number;

  @Metadata({ data: "json, name=MASE" })
  mase?: number;

  @Metadata({ data: "json, name=RMSE" })
  rmse?: number;

  @Metadata({ data: "json, name=WAPE" })
  wape?: number;
}
