import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePredictorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PredictorArn" })
  predictorArn: string;
}
