import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeForecastRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ForecastArn" })
  forecastArn: string;
}
