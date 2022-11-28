import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeValueUpdate } from "./attributevalueupdate";
import { ConditionalOperatorEnum } from "./conditionaloperatorenum";
import { ExpectedAttributeValue } from "./expectedattributevalue";
import { AttributeValue } from "./attributevalue";
import { ReturnConsumedCapacityEnum } from "./returnconsumedcapacityenum";
import { ReturnItemCollectionMetricsEnum } from "./returnitemcollectionmetricsenum";
import { ReturnValueEnum } from "./returnvalueenum";



// UpdateItemInput
/** 
 * Represents the input of an <code>UpdateItem</code> operation.
**/
export class UpdateItemInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeUpdates", elemType: AttributeValueUpdate })
  attributeUpdates?: Map<string, AttributeValueUpdate>;

  @SpeakeasyMetadata({ data: "json, name=ConditionExpression" })
  conditionExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=ConditionalOperator" })
  conditionalOperator?: ConditionalOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=Expected", elemType: ExpectedAttributeValue })
  expected?: Map<string, ExpectedAttributeValue>;

  @SpeakeasyMetadata({ data: "json, name=ExpressionAttributeNames" })
  expressionAttributeNames?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ExpressionAttributeValues", elemType: AttributeValue })
  expressionAttributeValues?: Map<string, AttributeValue>;

  @SpeakeasyMetadata({ data: "json, name=Key", elemType: AttributeValue })
  key: Map<string, AttributeValue>;

  @SpeakeasyMetadata({ data: "json, name=ReturnConsumedCapacity" })
  returnConsumedCapacity?: ReturnConsumedCapacityEnum;

  @SpeakeasyMetadata({ data: "json, name=ReturnItemCollectionMetrics" })
  returnItemCollectionMetrics?: ReturnItemCollectionMetricsEnum;

  @SpeakeasyMetadata({ data: "json, name=ReturnValues" })
  returnValues?: ReturnValueEnum;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;

  @SpeakeasyMetadata({ data: "json, name=UpdateExpression" })
  updateExpression?: string;
}
