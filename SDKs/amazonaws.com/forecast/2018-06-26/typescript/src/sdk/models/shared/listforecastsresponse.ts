import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ForecastSummary } from "./forecastsummary";


export class ListForecastsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Forecasts", elemType: shared.ForecastSummary })
  forecasts?: ForecastSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
