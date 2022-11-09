import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StoredQueryMetadata } from "./storedquerymetadata";


export class ListStoredQueriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=StoredQueryMetadata", elemType: shared.StoredQueryMetadata })
  storedQueryMetadata?: StoredQueryMetadata[];
}
