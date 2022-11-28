import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateForecastResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ForecastArn" })
  forecastArn?: string;
}
