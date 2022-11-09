import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConditionalOperatorEnum } from "./conditionaloperatorenum";
import { AttributeValue } from "./attributevalue";
import { AttributeValue } from "./attributevalue";
import { ReturnConsumedCapacityEnum } from "./returnconsumedcapacityenum";
import { Condition } from "./condition";
import { SelectEnum } from "./selectenum";


// ScanInput
/** 
 * Represents the input of a <code>Scan</code> operation.
**/
export class ScanInput extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=ProjectionExpression" })
  projectionExpression?: string;

  @Metadata({ data: "json, name=ReturnConsumedCapacity" })
  returnConsumedCapacity?: ReturnConsumedCapacityEnum;

  @Metadata({ data: "json, name=ScanFilter", elemType: shared.Condition })
  scanFilter?: Map<string, Condition>;

  @Metadata({ data: "json, name=Segment" })
  segment?: number;

  @Metadata({ data: "json, name=Select" })
  select?: SelectEnum;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;

  @Metadata({ data: "json, name=TotalSegments" })
  totalSegments?: number;
}
