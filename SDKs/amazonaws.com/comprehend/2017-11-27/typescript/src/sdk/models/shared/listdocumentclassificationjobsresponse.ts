import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DocumentClassificationJobProperties } from "./documentclassificationjobproperties";


export class ListDocumentClassificationJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DocumentClassificationJobPropertiesList", elemType: shared.DocumentClassificationJobProperties })
  documentClassificationJobPropertiesList?: DocumentClassificationJobProperties[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
