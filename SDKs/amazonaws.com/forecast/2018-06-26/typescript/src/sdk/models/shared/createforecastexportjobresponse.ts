import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateForecastExportJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ForecastExportJobArn" })
  forecastExportJobArn?: string;
}
