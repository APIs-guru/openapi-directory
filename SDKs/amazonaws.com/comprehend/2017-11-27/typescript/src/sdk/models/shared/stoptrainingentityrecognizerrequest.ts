import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopTrainingEntityRecognizerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EntityRecognizerArn" })
  entityRecognizerArn: string;
}
