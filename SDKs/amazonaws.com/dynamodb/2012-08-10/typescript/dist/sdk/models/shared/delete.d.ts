import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
import { ReturnValuesOnConditionCheckFailureEnum } from "./returnvaluesonconditioncheckfailureenum";
/**
 * Represents a request to perform a <code>DeleteItem</code> operation.
**/
export declare class Delete extends SpeakeasyBase {
    conditionExpression?: string;
    expressionAttributeNames?: Map<string, string>;
    expressionAttributeValues?: Map<string, AttributeValue>;
    key: Map<string, AttributeValue>;
    returnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailureEnum;
    tableName: string;
}
