import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DocumentClassifierProperties } from "./documentclassifierproperties";


export class DescribeDocumentClassifierResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DocumentClassifierProperties" })
  documentClassifierProperties?: DocumentClassifierProperties;
}
