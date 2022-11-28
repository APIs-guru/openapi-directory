import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConsumedCapacity } from "./consumedcapacity";
import { AttributeValue } from "./attributevalue";



// QueryOutput
/** 
 * Represents the output of a <code>Query</code> operation.
**/
export class QueryOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConsumedCapacity" })
  consumedCapacity?: ConsumedCapacity;

  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: AttributeValue, elemDepth: 2 })
  items?: Map<string, AttributeValue>[];

  @SpeakeasyMetadata({ data: "json, name=LastEvaluatedKey", elemType: AttributeValue })
  lastEvaluatedKey?: Map<string, AttributeValue>;

  @SpeakeasyMetadata({ data: "json, name=ScannedCount" })
  scannedCount?: number;
}
