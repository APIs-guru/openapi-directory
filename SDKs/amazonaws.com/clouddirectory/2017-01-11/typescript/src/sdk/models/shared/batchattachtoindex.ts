import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectReference } from "./objectreference";



// BatchAttachToIndex
/** 
 * Attaches the specified object to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>AttachToIndex</a> and <a>BatchReadRequest$Operations</a>.
**/
export class BatchAttachToIndex extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IndexReference" })
  indexReference: ObjectReference;

  @SpeakeasyMetadata({ data: "json, name=TargetReference" })
  targetReference: ObjectReference;
}
