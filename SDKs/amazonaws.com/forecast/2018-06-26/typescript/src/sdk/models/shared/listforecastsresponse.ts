import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ForecastSummary } from "./forecastsummary";



export class ListForecastsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Forecasts", elemType: ForecastSummary })
  forecasts?: ForecastSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
