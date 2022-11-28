import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeDocumentClassifierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DocumentClassifierArn" })
  documentClassifierArn: string;
}
