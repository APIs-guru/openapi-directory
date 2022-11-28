import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
import { ReturnValuesOnConditionCheckFailureEnum } from "./returnvaluesonconditioncheckfailureenum";
/**
 * Represents a request to perform a check that an item exists or to check the condition of specific attributes of the item.
**/
export declare class ConditionCheck extends SpeakeasyBase {
    conditionExpression: string;
    expressionAttributeNames?: Map<string, string>;
    expressionAttributeValues?: Map<string, AttributeValue>;
    key: Map<string, AttributeValue>;
    returnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailureEnum;
    tableName: string;
}
