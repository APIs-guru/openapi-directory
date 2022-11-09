import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribePredictorRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=PredictorArn" })
  predictorArn: string;
}
