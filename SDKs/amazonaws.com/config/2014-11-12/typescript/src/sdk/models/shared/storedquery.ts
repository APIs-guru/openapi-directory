import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StoredQuery
/** 
 * Provides the details of a stored query.
**/
export class StoredQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Expression" })
  expression?: string;

  @SpeakeasyMetadata({ data: "json, name=QueryArn" })
  queryArn?: string;

  @SpeakeasyMetadata({ data: "json, name=QueryId" })
  queryId?: string;

  @SpeakeasyMetadata({ data: "json, name=QueryName" })
  queryName: string;
}
