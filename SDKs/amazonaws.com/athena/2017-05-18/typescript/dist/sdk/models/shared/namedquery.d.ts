import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A query, where <code>QueryString</code> is the list of SQL query statements that comprise the query.
**/
export declare class NamedQuery extends SpeakeasyBase {
    database: string;
    description?: string;
    name: string;
    namedQueryId?: string;
    queryString: string;
    workGroup?: string;
}
