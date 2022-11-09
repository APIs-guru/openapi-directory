import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteEntityRecognizerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EntityRecognizerArn" })
  entityRecognizerArn: string;
}
