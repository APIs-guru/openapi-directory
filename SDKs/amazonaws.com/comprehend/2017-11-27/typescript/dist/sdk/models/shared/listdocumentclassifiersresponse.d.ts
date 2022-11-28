import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentClassifierProperties } from "./documentclassifierproperties";
export declare class ListDocumentClassifiersResponse extends SpeakeasyBase {
    documentClassifierPropertiesList?: DocumentClassifierProperties[];
    nextToken?: string;
}
