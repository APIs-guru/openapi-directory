import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The database and data catalog context in which the query execution occurs.
**/
export declare class QueryExecutionContext extends SpeakeasyBase {
    catalog?: string;
    database?: string;
}
