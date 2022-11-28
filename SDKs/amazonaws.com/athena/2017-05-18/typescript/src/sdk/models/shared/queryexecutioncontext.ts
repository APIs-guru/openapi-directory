import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QueryExecutionContext
/** 
 * The database and data catalog context in which the query execution occurs.
**/
export class QueryExecutionContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Catalog" })
  catalog?: string;

  @SpeakeasyMetadata({ data: "json, name=Database" })
  database?: string;
}
