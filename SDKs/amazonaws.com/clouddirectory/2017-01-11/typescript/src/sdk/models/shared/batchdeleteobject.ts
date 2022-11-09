import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectReference } from "./objectreference";


// BatchDeleteObject
/** 
 * Represents the output of a <a>DeleteObject</a> operation.
**/
export class BatchDeleteObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=ObjectReference" })
  objectReference: ObjectReference;
}
