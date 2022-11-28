import { SpeakeasyBase } from "../../../internal/utils";
import { ForecastSummary } from "./forecastsummary";
export declare class ListForecastsResponse extends SpeakeasyBase {
    forecasts?: ForecastSummary[];
    nextToken?: string;
}
