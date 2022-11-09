import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopTrainingEntityRecognizerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EntityRecognizerArn" })
  entityRecognizerArn: string;
}
