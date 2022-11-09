import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PredictorBacktestExportJobSummary } from "./predictorbacktestexportjobsummary";


export class ListPredictorBacktestExportJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=PredictorBacktestExportJobs", elemType: shared.PredictorBacktestExportJobSummary })
  predictorBacktestExportJobs?: PredictorBacktestExportJobSummary[];
}
