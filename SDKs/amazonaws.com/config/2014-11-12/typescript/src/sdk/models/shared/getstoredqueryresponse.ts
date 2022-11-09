import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StoredQuery } from "./storedquery";


export class GetStoredQueryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=StoredQuery" })
  storedQuery?: StoredQuery;
}
