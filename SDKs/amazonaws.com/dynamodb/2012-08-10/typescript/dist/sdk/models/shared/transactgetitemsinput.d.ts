import { SpeakeasyBase } from "../../../internal/utils";
import { ReturnConsumedCapacityEnum } from "./returnconsumedcapacityenum";
import { TransactGetItem } from "./transactgetitem";
export declare class TransactGetItemsInput extends SpeakeasyBase {
    returnConsumedCapacity?: ReturnConsumedCapacityEnum;
    transactItems: TransactGetItem[];
}
