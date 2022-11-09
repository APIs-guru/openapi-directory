import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NamedQuery
/** 
 * A query, where <code>QueryString</code> is the list of SQL query statements that comprise the query.
**/
export class NamedQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=Database" })
  database: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=NamedQueryId" })
  namedQueryId?: string;

  @Metadata({ data: "json, name=QueryString" })
  queryString: string;

  @Metadata({ data: "json, name=WorkGroup" })
  workGroup?: string;
}
