import { SpeakeasyBase } from "../../../internal/utils";
import { StoredQueryMetadata } from "./storedquerymetadata";
export declare class ListStoredQueriesResponse extends SpeakeasyBase {
    nextToken?: string;
    storedQueryMetadata?: StoredQueryMetadata[];
}
