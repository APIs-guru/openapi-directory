import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentClassificationJobProperties } from "./documentclassificationjobproperties";



export class DescribeDocumentClassificationJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DocumentClassificationJobProperties" })
  documentClassificationJobProperties?: DocumentClassificationJobProperties;
}
