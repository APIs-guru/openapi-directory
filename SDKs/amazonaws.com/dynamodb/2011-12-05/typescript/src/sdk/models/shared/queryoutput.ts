import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
import { Key } from "./key";



export class QueryOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConsumedCapacityUnits" })
  consumedCapacityUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: AttributeValue, elemDepth: 2 })
  items?: Map<string, AttributeValue>[];

  @SpeakeasyMetadata({ data: "json, name=LastEvaluatedKey" })
  lastEvaluatedKey?: Key;
}
