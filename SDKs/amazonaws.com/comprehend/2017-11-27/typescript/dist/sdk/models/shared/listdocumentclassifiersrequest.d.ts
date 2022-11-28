import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentClassifierFilter } from "./documentclassifierfilter";
export declare class ListDocumentClassifiersRequest extends SpeakeasyBase {
    filter?: DocumentClassifierFilter;
    maxResults?: number;
    nextToken?: string;
}
