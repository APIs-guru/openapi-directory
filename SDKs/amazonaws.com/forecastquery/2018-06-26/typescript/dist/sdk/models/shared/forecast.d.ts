import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DataPoint } from "./datapoint";
/**
 * Provides information about a forecast. Returned as part of the <a>QueryForecast</a> response.
**/
export declare class Forecast extends SpeakeasyBase {
    predictions?: Map<string, DataPoint[]>;
}
