import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StoredQueryMetadata
/** 
 * Returns details of a specific query. 
**/
export class StoredQueryMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=QueryArn" })
  queryArn: string;

  @SpeakeasyMetadata({ data: "json, name=QueryId" })
  queryId: string;

  @SpeakeasyMetadata({ data: "json, name=QueryName" })
  queryName: string;
}
