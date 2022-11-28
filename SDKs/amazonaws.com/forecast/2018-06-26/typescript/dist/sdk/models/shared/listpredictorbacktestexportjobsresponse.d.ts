import { SpeakeasyBase } from "../../../internal/utils";
import { PredictorBacktestExportJobSummary } from "./predictorbacktestexportjobsummary";
export declare class ListPredictorBacktestExportJobsResponse extends SpeakeasyBase {
    nextToken?: string;
    predictorBacktestExportJobs?: PredictorBacktestExportJobSummary[];
}
