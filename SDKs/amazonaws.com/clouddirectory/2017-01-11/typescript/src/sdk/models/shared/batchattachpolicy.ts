import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectReference } from "./objectreference";
import { ObjectReference } from "./objectreference";


// BatchAttachPolicy
/** 
 * Attaches a policy object to a regular object inside a <a>BatchRead</a> operation. For more information, see <a>AttachPolicy</a> and <a>BatchReadRequest$Operations</a>.
**/
export class BatchAttachPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=ObjectReference" })
  objectReference: ObjectReference;

  @Metadata({ data: "json, name=PolicyReference" })
  policyReference: ObjectReference;
}
