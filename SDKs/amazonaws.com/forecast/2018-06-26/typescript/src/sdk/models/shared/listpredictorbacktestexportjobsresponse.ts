import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PredictorBacktestExportJobSummary } from "./predictorbacktestexportjobsummary";



export class ListPredictorBacktestExportJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PredictorBacktestExportJobs", elemType: PredictorBacktestExportJobSummary })
  predictorBacktestExportJobs?: PredictorBacktestExportJobSummary[];
}
