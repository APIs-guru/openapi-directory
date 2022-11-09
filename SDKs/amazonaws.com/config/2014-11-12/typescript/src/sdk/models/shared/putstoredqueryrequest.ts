import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StoredQuery } from "./storedquery";
import { Tag } from "./tag";


export class PutStoredQueryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=StoredQuery" })
  storedQuery: StoredQuery;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
