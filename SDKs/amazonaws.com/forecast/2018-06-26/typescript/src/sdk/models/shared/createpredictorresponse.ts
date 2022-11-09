import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreatePredictorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=PredictorArn" })
  predictorArn?: string;
}
