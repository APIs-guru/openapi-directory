import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataDestination } from "./datadestination";


// PredictorBacktestExportJobSummary
/** 
 * Provides a summary of the predictor backtest export job properties used in the <a>ListPredictorBacktestExportJobs</a> operation. To get a complete set of properties, call the <a>DescribePredictorBacktestExportJob</a> operation, and provide the listed <code>PredictorBacktestExportJobArn</code>.
**/
export class PredictorBacktestExportJobSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=Destination" })
  destination?: DataDestination;

  @Metadata({ data: "json, name=LastModificationTime" })
  lastModificationTime?: Date;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=PredictorBacktestExportJobArn" })
  predictorBacktestExportJobArn?: string;

  @Metadata({ data: "json, name=PredictorBacktestExportJobName" })
  predictorBacktestExportJobName?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
