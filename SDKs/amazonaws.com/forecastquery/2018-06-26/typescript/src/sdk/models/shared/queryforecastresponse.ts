import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Forecast } from "./forecast";



export class QueryForecastResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Forecast" })
  forecast?: Forecast;
}
