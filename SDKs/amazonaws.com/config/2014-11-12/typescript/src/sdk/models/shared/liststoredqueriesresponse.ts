import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StoredQueryMetadata } from "./storedquerymetadata";



export class ListStoredQueriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=StoredQueryMetadata", elemType: StoredQueryMetadata })
  storedQueryMetadata?: StoredQueryMetadata[];
}
