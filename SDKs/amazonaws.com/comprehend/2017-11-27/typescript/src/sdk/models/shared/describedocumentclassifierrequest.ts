import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeDocumentClassifierRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DocumentClassifierArn" })
  documentClassifierArn: string;
}
