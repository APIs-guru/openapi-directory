import { SpeakeasyBase } from "../../../internal/utils";
import { ConditionalOperatorEnum } from "./conditionaloperatorenum";
import { AttributeValue } from "./attributevalue";
import { Condition } from "./condition";
import { ReturnConsumedCapacityEnum } from "./returnconsumedcapacityenum";
import { SelectEnum } from "./selectenum";
/**
 * Represents the input of a <code>Query</code> operation.
**/
export declare class QueryInput extends SpeakeasyBase {
    attributesToGet?: string[];
    conditionalOperator?: ConditionalOperatorEnum;
    consistentRead?: boolean;
    exclusiveStartKey?: Map<string, AttributeValue>;
    expressionAttributeNames?: Map<string, string>;
    expressionAttributeValues?: Map<string, AttributeValue>;
    filterExpression?: string;
    indexName?: string;
    keyConditionExpression?: string;
    keyConditions?: Map<string, Condition>;
    limit?: number;
    projectionExpression?: string;
    queryFilter?: Map<string, Condition>;
    returnConsumedCapacity?: ReturnConsumedCapacityEnum;
    scanIndexForward?: boolean;
    select?: SelectEnum;
    tableName: string;
}
