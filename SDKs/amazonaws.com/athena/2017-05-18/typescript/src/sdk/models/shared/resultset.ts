import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResultSetMetadata } from "./resultsetmetadata";
import { Row } from "./row";



// ResultSet
/** 
 * The metadata and rows that comprise a query result set. The metadata describes the column structure and data types. To return a <code>ResultSet</code> object, use <a>GetQueryResults</a>.
**/
export class ResultSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResultSetMetadata" })
  resultSetMetadata?: ResultSetMetadata;

  @SpeakeasyMetadata({ data: "json, name=Rows", elemType: Row })
  rows?: Row[];
}
