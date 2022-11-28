import { SpeakeasyBase } from "../../../internal/utils";
import { QueryFilter } from "./queryfilter";
/**
 * The SQL query to modify the message.
**/
export declare class SqlQueryDatasetAction extends SpeakeasyBase {
    filters?: QueryFilter[];
    sqlQuery: string;
}
