import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateForecastExportJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ForecastExportJobArn" })
  forecastExportJobArn?: string;
}
