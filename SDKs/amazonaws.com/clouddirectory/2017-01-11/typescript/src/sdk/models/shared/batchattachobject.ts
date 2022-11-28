import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectReference } from "./objectreference";



// BatchAttachObject
/** 
 * Represents the output of an <a>AttachObject</a> operation.
**/
export class BatchAttachObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChildReference" })
  childReference: ObjectReference;

  @SpeakeasyMetadata({ data: "json, name=LinkName" })
  linkName: string;

  @SpeakeasyMetadata({ data: "json, name=ParentReference" })
  parentReference: ObjectReference;
}
