import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeValueUpdate } from "./attributevalueupdate";
import { ConditionalOperatorEnum } from "./conditionaloperatorenum";
import { ExpectedAttributeValue } from "./expectedattributevalue";
import { AttributeValue } from "./attributevalue";
import { AttributeValue } from "./attributevalue";
import { ReturnConsumedCapacityEnum } from "./returnconsumedcapacityenum";
import { ReturnItemCollectionMetricsEnum } from "./returnitemcollectionmetricsenum";
import { ReturnValueEnum } from "./returnvalueenum";


// UpdateItemInput
/** 
 * Represents the input of an <code>UpdateItem</code> operation.
**/
export class UpdateItemInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeUpdates", elemType: shared.AttributeValueUpdate })
  attributeUpdates?: Map<string, AttributeValueUpdate>;

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

  @Metadata({ data: "json, name=Key", elemType: shared.AttributeValue })
  key: Map<string, AttributeValue>;

  @Metadata({ data: "json, name=ReturnConsumedCapacity" })
  returnConsumedCapacity?: ReturnConsumedCapacityEnum;

  @Metadata({ data: "json, name=ReturnItemCollectionMetrics" })
  returnItemCollectionMetrics?: ReturnItemCollectionMetricsEnum;

  @Metadata({ data: "json, name=ReturnValues" })
  returnValues?: ReturnValueEnum;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;

  @Metadata({ data: "json, name=UpdateExpression" })
  updateExpression?: string;
}
