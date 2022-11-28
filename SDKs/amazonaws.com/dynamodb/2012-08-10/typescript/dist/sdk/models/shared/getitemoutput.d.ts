import { SpeakeasyBase } from "../../../internal/utils";
import { ConsumedCapacity } from "./consumedcapacity";
import { AttributeValue } from "./attributevalue";
/**
 * Represents the output of a <code>GetItem</code> operation.
**/
export declare class GetItemOutput extends SpeakeasyBase {
    consumedCapacity?: ConsumedCapacity;
    item?: Map<string, AttributeValue>;
}
