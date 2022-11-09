import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DocumentClassificationJobFilter } from "./documentclassificationjobfilter";
export declare class ListDocumentClassificationJobsRequest extends SpeakeasyBase {
    filter?: DocumentClassificationJobFilter;
    maxResults?: number;
    nextToken?: string;
}
