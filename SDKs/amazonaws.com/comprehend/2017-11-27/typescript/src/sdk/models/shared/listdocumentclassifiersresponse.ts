import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentClassifierProperties } from "./documentclassifierproperties";



export class ListDocumentClassifiersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DocumentClassifierPropertiesList", elemType: DocumentClassifierProperties })
  documentClassifierPropertiesList?: DocumentClassifierProperties[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
