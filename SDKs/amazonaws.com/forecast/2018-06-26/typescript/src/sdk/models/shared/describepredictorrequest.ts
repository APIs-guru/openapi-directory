import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribePredictorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PredictorArn" })
  predictorArn: string;
}
