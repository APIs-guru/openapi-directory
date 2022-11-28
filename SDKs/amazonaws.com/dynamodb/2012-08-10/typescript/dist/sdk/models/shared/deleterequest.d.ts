import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
/**
 * Represents a request to perform a <code>DeleteItem</code> operation on an item.
**/
export declare class DeleteRequest extends SpeakeasyBase {
    key: Map<string, AttributeValue>;
}
