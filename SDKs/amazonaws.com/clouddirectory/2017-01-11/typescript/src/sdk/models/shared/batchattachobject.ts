import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectReference } from "./objectreference";
import { ObjectReference } from "./objectreference";


// BatchAttachObject
/** 
 * Represents the output of an <a>AttachObject</a> operation.
**/
export class BatchAttachObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChildReference" })
  childReference: ObjectReference;

  @Metadata({ data: "json, name=LinkName" })
  linkName: string;

  @Metadata({ data: "json, name=ParentReference" })
  parentReference: ObjectReference;
}
