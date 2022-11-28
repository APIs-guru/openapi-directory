import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
import { ReturnValuesOnConditionCheckFailureEnum } from "./returnvaluesonconditioncheckfailureenum";



// ConditionCheck
/** 
 * Represents a request to perform a check that an item exists or to check the condition of specific attributes of the item.
**/
export class ConditionCheck extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConditionExpression" })
  conditionExpression: string;

  @SpeakeasyMetadata({ data: "json, name=ExpressionAttributeNames" })
  expressionAttributeNames?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ExpressionAttributeValues", elemType: AttributeValue })
  expressionAttributeValues?: Map<string, AttributeValue>;

  @SpeakeasyMetadata({ data: "json, name=Key", elemType: AttributeValue })
  key: Map<string, AttributeValue>;

  @SpeakeasyMetadata({ data: "json, name=ReturnValuesOnConditionCheckFailure" })
  returnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailureEnum;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
