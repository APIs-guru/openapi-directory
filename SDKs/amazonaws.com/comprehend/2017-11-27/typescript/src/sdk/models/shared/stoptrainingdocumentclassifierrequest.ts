import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopTrainingDocumentClassifierRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DocumentClassifierArn" })
  documentClassifierArn: string;
}
