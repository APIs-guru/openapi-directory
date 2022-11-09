import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteForecastRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ForecastArn" })
  forecastArn: string;
}
