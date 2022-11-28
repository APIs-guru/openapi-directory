import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
import { ReturnValuesOnConditionCheckFailureEnum } from "./returnvaluesonconditioncheckfailureenum";
/**
 * Represents a request to perform a <code>PutItem</code> operation.
**/
export declare class Put extends SpeakeasyBase {
    conditionExpression?: string;
    expressionAttributeNames?: Map<string, string>;
    expressionAttributeValues?: Map<string, AttributeValue>;
    item: Map<string, AttributeValue>;
    returnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailureEnum;
    tableName: string;
}
