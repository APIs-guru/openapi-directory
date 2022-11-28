import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataDestination } from "./datadestination";



export class DescribeForecastExportJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Destination" })
  destination?: DataDestination;

  @SpeakeasyMetadata({ data: "json, name=ForecastArn" })
  forecastArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ForecastExportJobArn" })
  forecastExportJobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ForecastExportJobName" })
  forecastExportJobName?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModificationTime" })
  lastModificationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
