import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ColumnInfo } from "./columninfo";



// ResultSetMetadata
/** 
 * The metadata that describes the column structure and data types of a table of query results. To return a <code>ResultSetMetadata</code> object, use <a>GetQueryResults</a>.
**/
export class ResultSetMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ColumnInfo", elemType: ColumnInfo })
  columnInfo?: ColumnInfo[];
}
