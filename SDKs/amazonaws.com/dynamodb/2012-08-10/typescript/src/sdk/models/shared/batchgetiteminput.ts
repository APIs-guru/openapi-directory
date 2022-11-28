import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeysAndAttributes } from "./keysandattributes";
import { ReturnConsumedCapacityEnum } from "./returnconsumedcapacityenum";



// BatchGetItemInput
/** 
 * Represents the input of a <code>BatchGetItem</code> operation.
**/
export class BatchGetItemInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RequestItems", elemType: KeysAndAttributes })
  requestItems: Map<string, KeysAndAttributes>;

  @SpeakeasyMetadata({ data: "json, name=ReturnConsumedCapacity" })
  returnConsumedCapacity?: ReturnConsumedCapacityEnum;
}
