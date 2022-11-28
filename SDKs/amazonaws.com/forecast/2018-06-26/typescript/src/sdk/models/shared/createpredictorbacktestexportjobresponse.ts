import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreatePredictorBacktestExportJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PredictorBacktestExportJobArn" })
  predictorBacktestExportJobArn?: string;
}
