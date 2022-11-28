import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConsumedCapacity } from "./consumedcapacity";
import { AttributeValue } from "./attributevalue";
import { KeysAndAttributes } from "./keysandattributes";



// BatchGetItemOutput
/** 
 * Represents the output of a <code>BatchGetItem</code> operation.
**/
export class BatchGetItemOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConsumedCapacity", elemType: ConsumedCapacity })
  consumedCapacity?: ConsumedCapacity[];

  @SpeakeasyMetadata({ data: "json, name=Responses", elemType: AttributeValue, elemDepth: 3 })
  responses?: Map<string, Map<string, AttributeValue>[]>;

  @SpeakeasyMetadata({ data: "json, name=UnprocessedKeys", elemType: KeysAndAttributes })
  unprocessedKeys?: Map<string, KeysAndAttributes>;
}
