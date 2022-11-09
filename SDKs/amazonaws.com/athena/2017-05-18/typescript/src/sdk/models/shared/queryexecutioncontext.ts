import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// QueryExecutionContext
/** 
 * The database and data catalog context in which the query execution occurs.
**/
export class QueryExecutionContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=Catalog" })
  catalog?: string;

  @Metadata({ data: "json, name=Database" })
  database?: string;
}
