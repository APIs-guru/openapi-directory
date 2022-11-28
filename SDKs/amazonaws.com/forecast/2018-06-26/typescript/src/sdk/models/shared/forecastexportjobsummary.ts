import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataDestination } from "./datadestination";



// ForecastExportJobSummary
/** 
 * Provides a summary of the forecast export job properties used in the <a>ListForecastExportJobs</a> operation. To get the complete set of properties, call the <a>DescribeForecastExportJob</a> operation, and provide the listed <code>ForecastExportJobArn</code>.
**/
export class ForecastExportJobSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Destination" })
  destination?: DataDestination;

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
