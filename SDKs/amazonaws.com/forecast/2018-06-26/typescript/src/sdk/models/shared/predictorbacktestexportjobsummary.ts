import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataDestination } from "./datadestination";



// PredictorBacktestExportJobSummary
/** 
 * Provides a summary of the predictor backtest export job properties used in the <a>ListPredictorBacktestExportJobs</a> operation. To get a complete set of properties, call the <a>DescribePredictorBacktestExportJob</a> operation, and provide the listed <code>PredictorBacktestExportJobArn</code>.
**/
export class PredictorBacktestExportJobSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Destination" })
  destination?: DataDestination;

  @SpeakeasyMetadata({ data: "json, name=LastModificationTime" })
  lastModificationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=PredictorBacktestExportJobArn" })
  predictorBacktestExportJobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=PredictorBacktestExportJobName" })
  predictorBacktestExportJobName?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
