import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectReference } from "./objectreference";



// BatchDetachPolicy
/** 
 * Detaches the specified policy from the specified directory inside a <a>BatchWrite</a> operation. For more information, see <a>DetachPolicy</a> and <a>BatchWriteRequest$Operations</a>.
**/
export class BatchDetachPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ObjectReference" })
  objectReference: ObjectReference;

  @SpeakeasyMetadata({ data: "json, name=PolicyReference" })
  policyReference: ObjectReference;
}
