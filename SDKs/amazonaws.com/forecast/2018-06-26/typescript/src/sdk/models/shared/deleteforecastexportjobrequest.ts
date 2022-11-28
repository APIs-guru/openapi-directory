import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteForecastExportJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ForecastExportJobArn" })
  forecastExportJobArn: string;
}
