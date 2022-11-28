import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteDocumentClassifierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DocumentClassifierArn" })
  documentClassifierArn: string;
}
