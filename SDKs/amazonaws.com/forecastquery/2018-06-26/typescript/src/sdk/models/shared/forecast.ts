import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataPoint } from "./datapoint";



// Forecast
/** 
 * Provides information about a forecast. Returned as part of the <a>QueryForecast</a> response.
**/
export class Forecast extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Predictions", elemType: DataPoint, elemDepth: 2 })
  predictions?: Map<string, DataPoint[]>;
}
