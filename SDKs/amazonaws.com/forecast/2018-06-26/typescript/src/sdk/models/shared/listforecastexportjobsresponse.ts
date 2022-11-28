import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ForecastExportJobSummary } from "./forecastexportjobsummary";



export class ListForecastExportJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ForecastExportJobs", elemType: ForecastExportJobSummary })
  forecastExportJobs?: ForecastExportJobSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
