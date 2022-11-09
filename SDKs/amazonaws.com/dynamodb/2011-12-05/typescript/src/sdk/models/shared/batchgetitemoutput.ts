import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchResponse } from "./batchresponse";
import { KeysAndAttributes } from "./keysandattributes";


export class BatchGetItemOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Responses", elemType: shared.BatchResponse })
  responses?: Map<string, BatchResponse>;

  @Metadata({ data: "json, name=UnprocessedKeys", elemType: shared.KeysAndAttributes })
  unprocessedKeys?: Map<string, KeysAndAttributes>;
}
