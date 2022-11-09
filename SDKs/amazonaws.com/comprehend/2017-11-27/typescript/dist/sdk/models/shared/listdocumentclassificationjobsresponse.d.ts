import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DocumentClassificationJobProperties } from "./documentclassificationjobproperties";
export declare class ListDocumentClassificationJobsResponse extends SpeakeasyBase {
    documentClassificationJobPropertiesList?: DocumentClassificationJobProperties[];
    nextToken?: string;
}
