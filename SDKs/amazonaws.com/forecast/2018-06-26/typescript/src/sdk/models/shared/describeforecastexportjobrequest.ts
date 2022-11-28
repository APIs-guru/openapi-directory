import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeForecastExportJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ForecastExportJobArn" })
  forecastExportJobArn: string;
}
