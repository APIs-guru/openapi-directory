import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectReference } from "./objectreference";
import { ObjectReference } from "./objectreference";


// BatchDetachFromIndex
/** 
 * Detaches the specified object from the specified index inside a <a>BatchRead</a> operation. For more information, see <a>DetachFromIndex</a> and <a>BatchReadRequest$Operations</a>.
**/
export class BatchDetachFromIndex extends SpeakeasyBase {
  @Metadata({ data: "json, name=IndexReference" })
  indexReference: ObjectReference;

  @Metadata({ data: "json, name=TargetReference" })
  targetReference: ObjectReference;
}
