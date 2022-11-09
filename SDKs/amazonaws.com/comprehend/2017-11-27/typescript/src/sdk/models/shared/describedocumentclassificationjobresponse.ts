import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DocumentClassificationJobProperties } from "./documentclassificationjobproperties";


export class DescribeDocumentClassificationJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DocumentClassificationJobProperties" })
  documentClassificationJobProperties?: DocumentClassificationJobProperties;
}
