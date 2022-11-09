import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeysAndAttributes } from "./keysandattributes";
import { ReturnConsumedCapacityEnum } from "./returnconsumedcapacityenum";


// BatchGetItemInput
/** 
 * Represents the input of a <code>BatchGetItem</code> operation.
**/
export class BatchGetItemInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=RequestItems", elemType: shared.KeysAndAttributes })
  requestItems: Map<string, KeysAndAttributes>;

  @Metadata({ data: "json, name=ReturnConsumedCapacity" })
  returnConsumedCapacity?: ReturnConsumedCapacityEnum;
}
