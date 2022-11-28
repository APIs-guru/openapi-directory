import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnInfo } from "./columninfo";
/**
 * The metadata that describes the column structure and data types of a table of query results. To return a <code>ResultSetMetadata</code> object, use <a>GetQueryResults</a>.
**/
export declare class ResultSetMetadata extends SpeakeasyBase {
    columnInfo?: ColumnInfo[];
}
