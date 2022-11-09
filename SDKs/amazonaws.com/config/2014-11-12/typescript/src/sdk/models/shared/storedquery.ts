import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StoredQuery
/** 
 * Provides the details of a stored query.
**/
export class StoredQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Expression" })
  expression?: string;

  @Metadata({ data: "json, name=QueryArn" })
  queryArn?: string;

  @Metadata({ data: "json, name=QueryId" })
  queryId?: string;

  @Metadata({ data: "json, name=QueryName" })
  queryName: string;
}
