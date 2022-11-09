import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ForecastExportJobSummary } from "./forecastexportjobsummary";
export declare class ListForecastExportJobsResponse extends SpeakeasyBase {
    forecastExportJobs?: ForecastExportJobSummary[];
    nextToken?: string;
}
