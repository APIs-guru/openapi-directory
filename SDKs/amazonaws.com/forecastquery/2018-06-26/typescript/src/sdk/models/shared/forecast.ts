import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataPoint } from "./datapoint";


// Forecast
/** 
 * Provides information about a forecast. Returned as part of the <a>QueryForecast</a> response.
**/
export class Forecast extends SpeakeasyBase {
  @Metadata({ data: "json, name=Predictions", elemType: shared.DataPoint, elemDepth: 2 })
  predictions?: Map<string, DataPoint[]>;
}
