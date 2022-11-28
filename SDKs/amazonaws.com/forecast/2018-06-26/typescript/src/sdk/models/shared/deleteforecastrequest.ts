import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteForecastRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ForecastArn" })
  forecastArn: string;
}
