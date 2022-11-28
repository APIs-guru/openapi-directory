import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribePredictorBacktestExportJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PredictorBacktestExportJobArn" })
  predictorBacktestExportJobArn: string;
}
