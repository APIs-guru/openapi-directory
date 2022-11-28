import { SpeakeasyBase } from "../../../internal/utils";
import { ConditionalOperatorEnum } from "./conditionaloperatorenum";
import { AttributeValue } from "./attributevalue";
import { ReturnConsumedCapacityEnum } from "./returnconsumedcapacityenum";
import { Condition } from "./condition";
import { SelectEnum } from "./selectenum";
/**
 * Represents the input of a <code>Scan</code> operation.
**/
export declare class ScanInput extends SpeakeasyBase {
    attributesToGet?: string[];
    conditionalOperator?: ConditionalOperatorEnum;
    consistentRead?: boolean;
    exclusiveStartKey?: Map<string, AttributeValue>;
    expressionAttributeNames?: Map<string, string>;
    expressionAttributeValues?: Map<string, AttributeValue>;
    filterExpression?: string;
    indexName?: string;
    limit?: number;
    projectionExpression?: string;
    returnConsumedCapacity?: ReturnConsumedCapacityEnum;
    scanFilter?: Map<string, Condition>;
    segment?: number;
    select?: SelectEnum;
    tableName: string;
    totalSegments?: number;
}
