import { SpeakeasyBase } from "../../../internal/utils";
import { BatchResponse } from "./batchresponse";
import { KeysAndAttributes } from "./keysandattributes";
export declare class BatchGetItemOutput extends SpeakeasyBase {
    responses?: Map<string, BatchResponse>;
    unprocessedKeys?: Map<string, KeysAndAttributes>;
}
