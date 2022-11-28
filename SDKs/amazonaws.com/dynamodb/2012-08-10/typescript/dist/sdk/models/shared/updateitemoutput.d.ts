import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
import { ConsumedCapacity } from "./consumedcapacity";
import { ItemCollectionMetrics } from "./itemcollectionmetrics";
/**
 * Represents the output of an <code>UpdateItem</code> operation.
**/
export declare class UpdateItemOutput extends SpeakeasyBase {
    attributes?: Map<string, AttributeValue>;
    consumedCapacity?: ConsumedCapacity;
    itemCollectionMetrics?: ItemCollectionMetrics;
}
