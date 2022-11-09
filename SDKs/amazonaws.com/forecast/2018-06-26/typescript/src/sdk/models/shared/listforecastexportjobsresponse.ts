import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ForecastExportJobSummary } from "./forecastexportjobsummary";


export class ListForecastExportJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ForecastExportJobs", elemType: shared.ForecastExportJobSummary })
  forecastExportJobs?: ForecastExportJobSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
