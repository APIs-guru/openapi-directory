import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ColumnInfo } from "./columninfo";


// ResultSetMetadata
/** 
 * The metadata that describes the column structure and data types of a table of query results. To return a <code>ResultSetMetadata</code> object, use <a>GetQueryResults</a>.
**/
export class ResultSetMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=ColumnInfo", elemType: shared.ColumnInfo })
  columnInfo?: ColumnInfo[];
}
