import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DocumentClassifierProperties } from "./documentclassifierproperties";


export class ListDocumentClassifiersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DocumentClassifierPropertiesList", elemType: shared.DocumentClassifierProperties })
  documentClassifierPropertiesList?: DocumentClassifierProperties[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
