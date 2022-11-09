import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeysAndAttributes } from "./keysandattributes";


export class BatchGetItemInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=RequestItems", elemType: shared.KeysAndAttributes })
  requestItems: Map<string, KeysAndAttributes>;
}
