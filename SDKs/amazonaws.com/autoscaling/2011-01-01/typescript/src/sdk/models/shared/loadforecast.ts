import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PredictiveScalingMetricSpecification } from "./predictivescalingmetricspecification";



// LoadForecast
/** 
 * A <code>GetPredictiveScalingForecast</code> call returns the load forecast for a predictive scaling policy. This structure includes the data points for that load forecast, along with the timestamps of those data points and the metric specification. 
**/
export class LoadForecast extends SpeakeasyBase {
  @SpeakeasyMetadata()
  metricSpecification: PredictiveScalingMetricSpecification;

  @SpeakeasyMetadata()
  timestamps: Date[];

  @SpeakeasyMetadata()
  values: number[];
}
