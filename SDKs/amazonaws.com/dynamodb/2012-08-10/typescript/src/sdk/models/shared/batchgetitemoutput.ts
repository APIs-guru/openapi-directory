import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConsumedCapacity } from "./consumedcapacity";
import { AttributeValue } from "./attributevalue";
import { KeysAndAttributes } from "./keysandattributes";


// BatchGetItemOutput
/** 
 * Represents the output of a <code>BatchGetItem</code> operation.
**/
export class BatchGetItemOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConsumedCapacity", elemType: shared.ConsumedCapacity })
  consumedCapacity?: ConsumedCapacity[];

  @Metadata({ data: "json, name=Responses", elemType: shared.AttributeValue, elemDepth: 3 })
  responses?: Map<string, Map<string, AttributeValue>[]>;

  @Metadata({ data: "json, name=UnprocessedKeys", elemType: shared.KeysAndAttributes })
  unprocessedKeys?: Map<string, KeysAndAttributes>;
}
