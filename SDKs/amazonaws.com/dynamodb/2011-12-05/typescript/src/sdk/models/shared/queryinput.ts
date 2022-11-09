import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Key } from "./key";
import { AttributeValue } from "./attributevalue";
import { Condition } from "./condition";


export class QueryInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributesToGet" })
  attributesToGet?: string[];

  @Metadata({ data: "json, name=ConsistentRead" })
  consistentRead?: boolean;

  @Metadata({ data: "json, name=Count" })
  count?: boolean;

  @Metadata({ data: "json, name=ExclusiveStartKey" })
  exclusiveStartKey?: Key;

  @Metadata({ data: "json, name=HashKeyValue" })
  hashKeyValue: AttributeValue;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=RangeKeyCondition" })
  rangeKeyCondition?: Condition;

  @Metadata({ data: "json, name=ScanIndexForward" })
  scanIndexForward?: boolean;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
