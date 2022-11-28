import { SpeakeasyBase } from "../../../internal/utils";
import { ConsumedCapacity } from "./consumedcapacity";
import { ItemCollectionMetrics } from "./itemcollectionmetrics";
import { WriteRequest } from "./writerequest";
/**
 * Represents the output of a <code>BatchWriteItem</code> operation.
**/
export declare class BatchWriteItemOutput extends SpeakeasyBase {
    consumedCapacity?: ConsumedCapacity[];
    itemCollectionMetrics?: Map<string, ItemCollectionMetrics[]>;
    unprocessedItems?: Map<string, WriteRequest[]>;
}
