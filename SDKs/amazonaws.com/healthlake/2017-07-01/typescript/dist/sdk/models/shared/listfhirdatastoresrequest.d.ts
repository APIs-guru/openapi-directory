import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DatastoreFilter } from "./datastorefilter";
export declare class ListFhirDatastoresRequest extends SpeakeasyBase {
    filter?: DatastoreFilter;
    maxResults?: number;
    nextToken?: string;
}
