import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteDocumentClassifierRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DocumentClassifierArn" })
  documentClassifierArn: string;
}
