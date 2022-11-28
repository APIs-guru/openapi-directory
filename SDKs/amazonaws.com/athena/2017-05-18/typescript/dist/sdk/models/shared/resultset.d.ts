import { SpeakeasyBase } from "../../../internal/utils";
import { ResultSetMetadata } from "./resultsetmetadata";
import { Row } from "./row";
/**
 * The metadata and rows that comprise a query result set. The metadata describes the column structure and data types. To return a <code>ResultSet</code> object, use <a>GetQueryResults</a>.
**/
export declare class ResultSet extends SpeakeasyBase {
    resultSetMetadata?: ResultSetMetadata;
    rows?: Row[];
}
