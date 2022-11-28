import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
import { ReturnValuesOnConditionCheckFailureEnum } from "./returnvaluesonconditioncheckfailureenum";



// Put
/** 
 * Represents a request to perform a <code>PutItem</code> operation.
**/
export class Put extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConditionExpression" })
  conditionExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=ExpressionAttributeNames" })
  expressionAttributeNames?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ExpressionAttributeValues", elemType: AttributeValue })
  expressionAttributeValues?: Map<string, AttributeValue>;

  @SpeakeasyMetadata({ data: "json, name=Item", elemType: AttributeValue })
  item: Map<string, AttributeValue>;

  @SpeakeasyMetadata({ data: "json, name=ReturnValuesOnConditionCheckFailure" })
  returnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailureEnum;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
