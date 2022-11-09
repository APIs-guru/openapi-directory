import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateEntityRecognizerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EntityRecognizerArn" })
  entityRecognizerArn?: string;
}
