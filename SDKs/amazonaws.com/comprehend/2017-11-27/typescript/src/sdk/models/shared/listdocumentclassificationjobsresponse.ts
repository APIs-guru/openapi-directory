import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentClassificationJobProperties } from "./documentclassificationjobproperties";



export class ListDocumentClassificationJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DocumentClassificationJobPropertiesList", elemType: DocumentClassificationJobProperties })
  documentClassificationJobPropertiesList?: DocumentClassificationJobProperties[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
