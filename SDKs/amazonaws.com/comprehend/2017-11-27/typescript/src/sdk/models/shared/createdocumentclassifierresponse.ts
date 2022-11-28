import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateDocumentClassifierResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DocumentClassifierArn" })
  documentClassifierArn?: string;
}
