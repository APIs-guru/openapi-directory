import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteForecastExportJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ForecastExportJobArn" })
  forecastExportJobArn: string;
}
