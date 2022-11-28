import { SpeakeasyBase } from "../../../internal/utils";
import { DataDestination } from "./datadestination";
/**
 * Provides a summary of the forecast export job properties used in the <a>ListForecastExportJobs</a> operation. To get the complete set of properties, call the <a>DescribeForecastExportJob</a> operation, and provide the listed <code>ForecastExportJobArn</code>.
**/
export declare class ForecastExportJobSummary extends SpeakeasyBase {
    creationTime?: Date;
    destination?: DataDestination;
    forecastExportJobArn?: string;
    forecastExportJobName?: string;
    lastModificationTime?: Date;
    message?: string;
    status?: string;
}
