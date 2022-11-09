import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeValue } from "./attributevalue";
import { AttributeValue } from "./attributevalue";
import { ReturnValuesOnConditionCheckFailureEnum } from "./returnvaluesonconditioncheckfailureenum";


// Update
/** 
 * Represents a request to perform an <code>UpdateItem</code> operation.
**/
export class Update extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConditionExpression" })
  conditionExpression?: string;

  @Metadata({ data: "json, name=ExpressionAttributeNames" })
  expressionAttributeNames?: Map<string, string>;

  @Metadata({ data: "json, name=ExpressionAttributeValues", elemType: shared.AttributeValue })
  expressionAttributeValues?: Map<string, AttributeValue>;

  @Metadata({ data: "json, name=Key", elemType: shared.AttributeValue })
  key: Map<string, AttributeValue>;

  @Metadata({ data: "json, name=ReturnValuesOnConditionCheckFailure" })
  returnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailureEnum;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;

  @Metadata({ data: "json, name=UpdateExpression" })
  updateExpression: string;
}
