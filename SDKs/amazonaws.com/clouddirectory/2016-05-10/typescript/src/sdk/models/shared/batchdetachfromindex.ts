import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectReference } from "./objectreference";



// BatchDetachFromIndex
/** 
 * Detaches the specified object from the specified index inside a <a>BatchRead</a> operation. For more information, see <a>DetachFromIndex</a> and <a>BatchReadRequest$Operations</a>.
**/
export class BatchDetachFromIndex extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IndexReference" })
  indexReference: ObjectReference;

  @SpeakeasyMetadata({ data: "json, name=TargetReference" })
  targetReference: ObjectReference;
}
