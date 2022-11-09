import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectReference } from "./objectreference";
import { ObjectReference } from "./objectreference";


// BatchAttachToIndex
/** 
 * Attaches the specified object to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>AttachToIndex</a> and <a>BatchReadRequest$Operations</a>.
**/
export class BatchAttachToIndex extends SpeakeasyBase {
  @Metadata({ data: "json, name=IndexReference" })
  indexReference: ObjectReference;

  @Metadata({ data: "json, name=TargetReference" })
  targetReference: ObjectReference;
}
