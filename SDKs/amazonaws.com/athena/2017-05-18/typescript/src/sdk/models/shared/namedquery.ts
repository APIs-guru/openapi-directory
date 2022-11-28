import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NamedQuery
/** 
 * A query, where <code>QueryString</code> is the list of SQL query statements that comprise the query.
**/
export class NamedQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Database" })
  database: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=NamedQueryId" })
  namedQueryId?: string;

  @SpeakeasyMetadata({ data: "json, name=QueryString" })
  queryString: string;

  @SpeakeasyMetadata({ data: "json, name=WorkGroup" })
  workGroup?: string;
}
