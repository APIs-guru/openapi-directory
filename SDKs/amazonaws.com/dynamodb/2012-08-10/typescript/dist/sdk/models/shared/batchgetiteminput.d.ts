import { SpeakeasyBase } from "../../../internal/utils";
import { KeysAndAttributes } from "./keysandattributes";
import { ReturnConsumedCapacityEnum } from "./returnconsumedcapacityenum";
/**
 * Represents the input of a <code>BatchGetItem</code> operation.
**/
export declare class BatchGetItemInput extends SpeakeasyBase {
    requestItems: Map<string, KeysAndAttributes>;
    returnConsumedCapacity?: ReturnConsumedCapacityEnum;
}
