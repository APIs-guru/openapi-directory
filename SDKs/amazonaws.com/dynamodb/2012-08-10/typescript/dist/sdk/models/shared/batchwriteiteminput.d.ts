import { SpeakeasyBase } from "../../../internal/utils";
import { WriteRequest } from "./writerequest";
import { ReturnConsumedCapacityEnum } from "./returnconsumedcapacityenum";
import { ReturnItemCollectionMetricsEnum } from "./returnitemcollectionmetricsenum";
/**
 * Represents the input of a <code>BatchWriteItem</code> operation.
**/
export declare class BatchWriteItemInput extends SpeakeasyBase {
    requestItems: Map<string, WriteRequest[]>;
    returnConsumedCapacity?: ReturnConsumedCapacityEnum;
    returnItemCollectionMetrics?: ReturnItemCollectionMetricsEnum;
}
