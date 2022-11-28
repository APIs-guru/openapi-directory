import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
import { ReturnConsumedCapacityEnum } from "./returnconsumedcapacityenum";
/**
 * Represents the input of a <code>GetItem</code> operation.
**/
export declare class GetItemInput extends SpeakeasyBase {
    attributesToGet?: string[];
    consistentRead?: boolean;
    expressionAttributeNames?: Map<string, string>;
    key: Map<string, AttributeValue>;
    projectionExpression?: string;
    returnConsumedCapacity?: ReturnConsumedCapacityEnum;
    tableName: string;
}
