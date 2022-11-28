import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValueUpdate } from "./attributevalueupdate";
import { ConditionalOperatorEnum } from "./conditionaloperatorenum";
import { ExpectedAttributeValue } from "./expectedattributevalue";
import { AttributeValue } from "./attributevalue";
import { ReturnConsumedCapacityEnum } from "./returnconsumedcapacityenum";
import { ReturnItemCollectionMetricsEnum } from "./returnitemcollectionmetricsenum";
import { ReturnValueEnum } from "./returnvalueenum";
/**
 * Represents the input of an <code>UpdateItem</code> operation.
**/
export declare class UpdateItemInput extends SpeakeasyBase {
    attributeUpdates?: Map<string, AttributeValueUpdate>;
    conditionExpression?: string;
    conditionalOperator?: ConditionalOperatorEnum;
    expected?: Map<string, ExpectedAttributeValue>;
    expressionAttributeNames?: Map<string, string>;
    expressionAttributeValues?: Map<string, AttributeValue>;
    key: Map<string, AttributeValue>;
    returnConsumedCapacity?: ReturnConsumedCapacityEnum;
    returnItemCollectionMetrics?: ReturnItemCollectionMetricsEnum;
    returnValues?: ReturnValueEnum;
    tableName: string;
    updateExpression?: string;
}
