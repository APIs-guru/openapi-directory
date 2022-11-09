import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectReference } from "./objectreference";


// BatchGetObjectInformation
/** 
 * Retrieves metadata about an object inside a <a>BatchRead</a> operation. For more information, see <a>GetObjectInformation</a> and <a>BatchReadRequest$Operations</a>.
**/
export class BatchGetObjectInformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=ObjectReference" })
  objectReference: ObjectReference;
}
