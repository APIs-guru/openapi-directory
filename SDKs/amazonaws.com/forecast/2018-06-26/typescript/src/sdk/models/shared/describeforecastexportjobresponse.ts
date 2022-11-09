import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataDestination } from "./datadestination";


export class DescribeForecastExportJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=Destination" })
  destination?: DataDestination;

  @Metadata({ data: "json, name=ForecastArn" })
  forecastArn?: string;

  @Metadata({ data: "json, name=ForecastExportJobArn" })
  forecastExportJobArn?: string;

  @Metadata({ data: "json, name=ForecastExportJobName" })
  forecastExportJobName?: string;

  @Metadata({ data: "json, name=LastModificationTime" })
  lastModificationTime?: Date;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
