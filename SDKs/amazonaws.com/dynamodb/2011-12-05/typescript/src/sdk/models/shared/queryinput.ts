import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Key } from "./key";
import { AttributeValue } from "./attributevalue";
import { Condition } from "./condition";



export class QueryInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributesToGet" })
  attributesToGet?: string[];

  @SpeakeasyMetadata({ data: "json, name=ConsistentRead" })
  consistentRead?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ExclusiveStartKey" })
  exclusiveStartKey?: Key;

  @SpeakeasyMetadata({ data: "json, name=HashKeyValue" })
  hashKeyValue: AttributeValue;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=RangeKeyCondition" })
  rangeKeyCondition?: Condition;

  @SpeakeasyMetadata({ data: "json, name=ScanIndexForward" })
  scanIndexForward?: boolean;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
