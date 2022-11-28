import { SpeakeasyBase } from "../../../internal/utils";
import { ConsumedCapacity } from "./consumedcapacity";
import { ItemCollectionMetrics } from "./itemcollectionmetrics";
export declare class TransactWriteItemsOutput extends SpeakeasyBase {
    consumedCapacity?: ConsumedCapacity[];
    itemCollectionMetrics?: Map<string, ItemCollectionMetrics[]>;
}
