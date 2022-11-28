import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StoredQuery } from "./storedquery";
import { Tag } from "./tag";



export class PutStoredQueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StoredQuery" })
  storedQuery: StoredQuery;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
