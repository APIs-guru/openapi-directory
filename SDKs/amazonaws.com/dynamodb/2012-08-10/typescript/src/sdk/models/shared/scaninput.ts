import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConditionalOperatorEnum } from "./conditionaloperatorenum";
import { AttributeValue } from "./attributevalue";
import { ReturnConsumedCapacityEnum } from "./returnconsumedcapacityenum";
import { Condition } from "./condition";
import { SelectEnum } from "./selectenum";



// ScanInput
/** 
 * Represents the input of a <code>Scan</code> operation.
**/
export class ScanInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributesToGet" })
  attributesToGet?: string[];

  @SpeakeasyMetadata({ data: "json, name=ConditionalOperator" })
  conditionalOperator?: ConditionalOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=ConsistentRead" })
  consistentRead?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ExclusiveStartKey", elemType: AttributeValue })
  exclusiveStartKey?: Map<string, AttributeValue>;

  @SpeakeasyMetadata({ data: "json, name=ExpressionAttributeNames" })
  expressionAttributeNames?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ExpressionAttributeValues", elemType: AttributeValue })
  expressionAttributeValues?: Map<string, AttributeValue>;

  @SpeakeasyMetadata({ data: "json, name=FilterExpression" })
  filterExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=IndexName" })
  indexName?: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=ProjectionExpression" })
  projectionExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=ReturnConsumedCapacity" })
  returnConsumedCapacity?: ReturnConsumedCapacityEnum;

  @SpeakeasyMetadata({ data: "json, name=ScanFilter", elemType: Condition })
  scanFilter?: Map<string, Condition>;

  @SpeakeasyMetadata({ data: "json, name=Segment" })
  segment?: number;

  @SpeakeasyMetadata({ data: "json, name=Select" })
  select?: SelectEnum;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;

  @SpeakeasyMetadata({ data: "json, name=TotalSegments" })
  totalSegments?: number;
}
