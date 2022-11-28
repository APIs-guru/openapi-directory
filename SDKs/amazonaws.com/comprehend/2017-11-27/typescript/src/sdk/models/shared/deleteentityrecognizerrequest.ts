import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteEntityRecognizerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EntityRecognizerArn" })
  entityRecognizerArn: string;
}
