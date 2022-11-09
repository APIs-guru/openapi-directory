import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConditionalOperatorEnum } from "./conditionaloperatorenum";
import { ExpectedAttributeValue } from "./expectedattributevalue";
import { AttributeValue } from "./attributevalue";
import { AttributeValue } from "./attributevalue";
import { ReturnConsumedCapacityEnum } from "./returnconsumedcapacityenum";
import { ReturnItemCollectionMetricsEnum } from "./returnitemcollectionmetricsenum";
import { ReturnValueEnum } from "./returnvalueenum";


// PutItemInput
/** 
 * Represents the input of a <code>PutItem</code> operation.
**/
export class PutItemInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConditionExpression" })
  conditionExpression?: string;

  @Metadata({ data: "json, name=ConditionalOperator" })
  conditionalOperator?: ConditionalOperatorEnum;

  @Metadata({ data: "json, name=Expected", elemType: shared.ExpectedAttributeValue })
  expected?: Map<string, ExpectedAttributeValue>;

  @Metadata({ data: "json, name=ExpressionAttributeNames" })
  expressionAttributeNames?: Map<string, string>;

  @Metadata({ data: "json, name=ExpressionAttributeValues", elemType: shared.AttributeValue })
  expressionAttributeValues?: Map<string, AttributeValue>;

  @Metadata({ data: "json, name=Item", elemType: shared.AttributeValue })
  item: Map<string, AttributeValue>;

  @Metadata({ data: "json, name=ReturnConsumedCapacity" })
  returnConsumedCapacity?: ReturnConsumedCapacityEnum;

  @Metadata({ data: "json, name=ReturnItemCollectionMetrics" })
  returnItemCollectionMetrics?: ReturnItemCollectionMetricsEnum;

  @Metadata({ data: "json, name=ReturnValues" })
  returnValues?: ReturnValueEnum;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
