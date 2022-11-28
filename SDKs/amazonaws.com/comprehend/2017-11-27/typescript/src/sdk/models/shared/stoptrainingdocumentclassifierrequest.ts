import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopTrainingDocumentClassifierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DocumentClassifierArn" })
  documentClassifierArn: string;
}
