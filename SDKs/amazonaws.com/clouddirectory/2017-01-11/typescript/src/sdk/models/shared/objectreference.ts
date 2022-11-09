import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObjectReference
/** 
 * The reference that identifies an object.
**/
export class ObjectReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=Selector" })
  selector?: string;
}
