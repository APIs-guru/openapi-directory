import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeletePredictorRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=PredictorArn" })
  predictorArn: string;
}
