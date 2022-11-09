import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Forecast } from "./forecast";


export class QueryForecastResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Forecast" })
  forecast?: Forecast;
}
