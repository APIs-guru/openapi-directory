import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePredictorBacktestExportJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PredictorBacktestExportJobArn" })
  predictorBacktestExportJobArn: string;
}
