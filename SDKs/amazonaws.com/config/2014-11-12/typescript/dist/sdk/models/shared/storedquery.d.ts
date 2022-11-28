import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides the details of a stored query.
**/
export declare class StoredQuery extends SpeakeasyBase {
    description?: string;
    expression?: string;
    queryArn?: string;
    queryId?: string;
    queryName: string;
}
