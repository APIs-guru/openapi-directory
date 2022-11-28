import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentClassifierProperties } from "./documentclassifierproperties";



export class DescribeDocumentClassifierResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DocumentClassifierProperties" })
  documentClassifierProperties?: DocumentClassifierProperties;
}
