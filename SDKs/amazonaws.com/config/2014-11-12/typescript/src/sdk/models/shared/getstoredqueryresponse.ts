import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StoredQuery } from "./storedquery";



export class GetStoredQueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StoredQuery" })
  storedQuery?: StoredQuery;
}
