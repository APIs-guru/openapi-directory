import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateForecastResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ForecastArn" })
  forecastArn?: string;
}
