import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeForecastRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ForecastArn" })
  forecastArn: string;
}
