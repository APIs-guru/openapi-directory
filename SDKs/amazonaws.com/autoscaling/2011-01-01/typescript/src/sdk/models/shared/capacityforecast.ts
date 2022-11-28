import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CapacityForecast
/** 
 * A <code>GetPredictiveScalingForecast</code> call returns the capacity forecast for a predictive scaling policy. This structure includes the data points for that capacity forecast, along with the timestamps of those data points. 
**/
export class CapacityForecast extends SpeakeasyBase {
  @SpeakeasyMetadata()
  timestamps: Date[];

  @SpeakeasyMetadata()
  values: number[];
}
