import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeValue } from "./attributevalue";
import { AttributeValue } from "./attributevalue";
import { ReturnValuesOnConditionCheckFailureEnum } from "./returnvaluesonconditioncheckfailureenum";


// Put
/** 
 * Represents a request to perform a <code>PutItem</code> operation.
**/
export class Put extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConditionExpression" })
  conditionExpression?: string;

  @Metadata({ data: "json, name=ExpressionAttributeNames" })
  expressionAttributeNames?: Map<string, string>;

  @Metadata({ data: "json, name=ExpressionAttributeValues", elemType: shared.AttributeValue })
  expressionAttributeValues?: Map<string, AttributeValue>;

  @Metadata({ data: "json, name=Item", elemType: shared.AttributeValue })
  item: Map<string, AttributeValue>;

  @Metadata({ data: "json, name=ReturnValuesOnConditionCheckFailure" })
  returnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailureEnum;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
