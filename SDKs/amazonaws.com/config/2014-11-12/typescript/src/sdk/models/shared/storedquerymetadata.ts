import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StoredQueryMetadata
/** 
 * Returns details of a specific query. 
**/
export class StoredQueryMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=QueryArn" })
  queryArn: string;

  @Metadata({ data: "json, name=QueryId" })
  queryId: string;

  @Metadata({ data: "json, name=QueryName" })
  queryName: string;
}
