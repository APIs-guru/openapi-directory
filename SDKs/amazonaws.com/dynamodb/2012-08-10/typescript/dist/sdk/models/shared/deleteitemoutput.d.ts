import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
import { ConsumedCapacity } from "./consumedcapacity";
import { ItemCollectionMetrics } from "./itemcollectionmetrics";
/**
 * Represents the output of a <code>DeleteItem</code> operation.
**/
export declare class DeleteItemOutput extends SpeakeasyBase {
    attributes?: Map<string, AttributeValue>;
    consumedCapacity?: ConsumedCapacity;
    itemCollectionMetrics?: ItemCollectionMetrics;
}
