import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreatePredictorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PredictorArn" })
  predictorArn?: string;
}
