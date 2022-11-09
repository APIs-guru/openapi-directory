import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataDestination } from "./datadestination";


// ForecastExportJobSummary
/** 
 * Provides a summary of the forecast export job properties used in the <a>ListForecastExportJobs</a> operation. To get the complete set of properties, call the <a>DescribeForecastExportJob</a> operation, and provide the listed <code>ForecastExportJobArn</code>.
**/
export class ForecastExportJobSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=Destination" })
  destination?: DataDestination;

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
