import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
import { ReturnValuesOnConditionCheckFailureEnum } from "./returnvaluesonconditioncheckfailureenum";



// Update
/** 
 * Represents a request to perform an <code>UpdateItem</code> operation.
**/
export class Update extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConditionExpression" })
  conditionExpression?: string;

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

  @SpeakeasyMetadata({ data: "json, name=UpdateExpression" })
  updateExpression: string;
}
