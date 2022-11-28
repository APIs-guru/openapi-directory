import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
/**
 * Specifies an item and related attribute values to retrieve in a <code>TransactGetItem</code> object.
**/
export declare class Get extends SpeakeasyBase {
    expressionAttributeNames?: Map<string, string>;
    key: Map<string, AttributeValue>;
    projectionExpression?: string;
    tableName: string;
}
