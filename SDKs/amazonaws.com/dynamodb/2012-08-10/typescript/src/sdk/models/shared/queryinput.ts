import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConditionalOperatorEnum } from "./conditionaloperatorenum";
import { AttributeValue } from "./attributevalue";
import { AttributeValue } from "./attributevalue";
import { Condition } from "./condition";
import { Condition } from "./condition";
import { ReturnConsumedCapacityEnum } from "./returnconsumedcapacityenum";
import { SelectEnum } from "./selectenum";


// QueryInput
/** 
 * Represents the input of a <code>Query</code> operation.
**/
export class QueryInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributesToGet" })
  attributesToGet?: string[];

  @Metadata({ data: "json, name=ConditionalOperator" })
  conditionalOperator?: ConditionalOperatorEnum;

  @Metadata({ data: "json, name=ConsistentRead" })
  consistentRead?: boolean;

  @Metadata({ data: "json, name=ExclusiveStartKey", elemType: shared.AttributeValue })
  exclusiveStartKey?: Map<string, AttributeValue>;

  @Metadata({ data: "json, name=ExpressionAttributeNames" })
  expressionAttributeNames?: Map<string, string>;

  @Metadata({ data: "json, name=ExpressionAttributeValues", elemType: shared.AttributeValue })
  expressionAttributeValues?: Map<string, AttributeValue>;

  @Metadata({ data: "json, name=FilterExpression" })
  filterExpression?: string;

  @Metadata({ data: "json, name=IndexName" })
  indexName?: string;

  @Metadata({ data: "json, name=KeyConditionExpression" })
  keyConditionExpression?: string;

  @Metadata({ data: "json, name=KeyConditions", elemType: shared.Condition })
  keyConditions?: Map<string, Condition>;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=ProjectionExpression" })
  projectionExpression?: string;

  @Metadata({ data: "json, name=QueryFilter", elemType: shared.Condition })
  queryFilter?: Map<string, Condition>;

  @Metadata({ data: "json, name=ReturnConsumedCapacity" })
  returnConsumedCapacity?: ReturnConsumedCapacityEnum;

  @Metadata({ data: "json, name=ScanIndexForward" })
  scanIndexForward?: boolean;

  @Metadata({ data: "json, name=Select" })
  select?: SelectEnum;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
