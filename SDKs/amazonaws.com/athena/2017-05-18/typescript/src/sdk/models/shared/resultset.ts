import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResultSetMetadata } from "./resultsetmetadata";
import { Row } from "./row";


// ResultSet
/** 
 * The metadata and rows that comprise a query result set. The metadata describes the column structure and data types. To return a <code>ResultSet</code> object, use <a>GetQueryResults</a>.
**/
export class ResultSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResultSetMetadata" })
  resultSetMetadata?: ResultSetMetadata;

  @Metadata({ data: "json, name=Rows", elemType: shared.Row })
  rows?: Row[];
}
