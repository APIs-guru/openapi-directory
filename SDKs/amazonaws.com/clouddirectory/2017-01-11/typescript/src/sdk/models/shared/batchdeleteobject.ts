import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectReference } from "./objectreference";



// BatchDeleteObject
/** 
 * Represents the output of a <a>DeleteObject</a> operation.
**/
export class BatchDeleteObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ObjectReference" })
  objectReference: ObjectReference;
}
