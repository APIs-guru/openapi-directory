import { SpeakeasyBase } from "../../../internal/utils";
import { DataDestination } from "./datadestination";
/**
 * Provides a summary of the predictor backtest export job properties used in the <a>ListPredictorBacktestExportJobs</a> operation. To get a complete set of properties, call the <a>DescribePredictorBacktestExportJob</a> operation, and provide the listed <code>PredictorBacktestExportJobArn</code>.
**/
export declare class PredictorBacktestExportJobSummary extends SpeakeasyBase {
    creationTime?: Date;
    destination?: DataDestination;
    lastModificationTime?: Date;
    message?: string;
    predictorBacktestExportJobArn?: string;
    predictorBacktestExportJobName?: string;
    status?: string;
}
