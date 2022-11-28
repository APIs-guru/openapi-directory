import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentClassificationJobFilter } from "./documentclassificationjobfilter";
export declare class ListDocumentClassificationJobsRequest extends SpeakeasyBase {
    filter?: DocumentClassificationJobFilter;
    maxResults?: number;
    nextToken?: string;
}
