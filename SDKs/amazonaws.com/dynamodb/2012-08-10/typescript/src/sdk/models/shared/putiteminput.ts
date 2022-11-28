import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConditionalOperatorEnum } from "./conditionaloperatorenum";
import { ExpectedAttributeValue } from "./expectedattributevalue";
import { AttributeValue } from "./attributevalue";
import { ReturnConsumedCapacityEnum } from "./returnconsumedcapacityenum";
import { ReturnItemCollectionMetricsEnum } from "./returnitemcollectionmetricsenum";
import { ReturnValueEnum } from "./returnvalueenum";



// PutItemInput
/** 
 * Represents the input of a <code>PutItem</code> operation.
**/
export class PutItemInput extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=Item", elemType: AttributeValue })
  item: Map<string, AttributeValue>;

  @SpeakeasyMetadata({ data: "json, name=ReturnConsumedCapacity" })
  returnConsumedCapacity?: ReturnConsumedCapacityEnum;

  @SpeakeasyMetadata({ data: "json, name=ReturnItemCollectionMetrics" })
  returnItemCollectionMetrics?: ReturnItemCollectionMetricsEnum;

  @SpeakeasyMetadata({ data: "json, name=ReturnValues" })
  returnValues?: ReturnValueEnum;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
