import { SpeakeasyBase } from "../../../internal/utils";
import { ConsumedCapacity } from "./consumedcapacity";
import { AttributeValue } from "./attributevalue";
import { KeysAndAttributes } from "./keysandattributes";
/**
 * Represents the output of a <code>BatchGetItem</code> operation.
**/
export declare class BatchGetItemOutput extends SpeakeasyBase {
    consumedCapacity?: ConsumedCapacity[];
    responses?: Map<string, Map<string, AttributeValue>[]>;
    unprocessedKeys?: Map<string, KeysAndAttributes>;
}
