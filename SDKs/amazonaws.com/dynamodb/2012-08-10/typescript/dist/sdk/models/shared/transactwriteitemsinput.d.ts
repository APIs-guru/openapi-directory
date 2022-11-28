import { SpeakeasyBase } from "../../../internal/utils";
import { ReturnConsumedCapacityEnum } from "./returnconsumedcapacityenum";
import { ReturnItemCollectionMetricsEnum } from "./returnitemcollectionmetricsenum";
import { TransactWriteItem } from "./transactwriteitem";
export declare class TransactWriteItemsInput extends SpeakeasyBase {
    clientRequestToken?: string;
    returnConsumedCapacity?: ReturnConsumedCapacityEnum;
    returnItemCollectionMetrics?: ReturnItemCollectionMetricsEnum;
    transactItems: TransactWriteItem[];
}
