import { SpeakeasyBase } from "../../../internal/utils";
import { StoredQuery } from "./storedquery";
import { Tag } from "./tag";
export declare class PutStoredQueryRequest extends SpeakeasyBase {
    storedQuery: StoredQuery;
    tags?: Tag[];
}
