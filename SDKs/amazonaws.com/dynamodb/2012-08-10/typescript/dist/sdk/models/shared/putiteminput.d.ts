import { SpeakeasyBase } from "../../../internal/utils";
import { ConditionalOperatorEnum } from "./conditionaloperatorenum";
import { ExpectedAttributeValue } from "./expectedattributevalue";
import { AttributeValue } from "./attributevalue";
import { ReturnConsumedCapacityEnum } from "./returnconsumedcapacityenum";
import { ReturnItemCollectionMetricsEnum } from "./returnitemcollectionmetricsenum";
import { ReturnValueEnum } from "./returnvalueenum";
/**
 * Represents the input of a <code>PutItem</code> operation.
**/
export declare class PutItemInput extends SpeakeasyBase {
    conditionExpression?: string;
    conditionalOperator?: ConditionalOperatorEnum;
    expected?: Map<string, ExpectedAttributeValue>;
    expressionAttributeNames?: Map<string, string>;
    expressionAttributeValues?: Map<string, AttributeValue>;
    item: Map<string, AttributeValue>;
    returnConsumedCapacity?: ReturnConsumedCapacityEnum;
    returnItemCollectionMetrics?: ReturnItemCollectionMetricsEnum;
    returnValues?: ReturnValueEnum;
    tableName: string;
}
