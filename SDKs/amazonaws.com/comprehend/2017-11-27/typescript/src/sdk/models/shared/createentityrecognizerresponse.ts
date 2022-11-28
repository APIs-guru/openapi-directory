import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateEntityRecognizerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EntityRecognizerArn" })
  entityRecognizerArn?: string;
}
