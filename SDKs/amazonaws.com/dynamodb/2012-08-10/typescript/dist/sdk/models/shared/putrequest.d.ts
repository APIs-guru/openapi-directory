import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
/**
 * Represents a request to perform a <code>PutItem</code> operation on an item.
**/
export declare class PutRequest extends SpeakeasyBase {
    item: Map<string, AttributeValue>;
}
