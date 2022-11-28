import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObjectReference
/** 
 * The reference that identifies an object.
**/
export class ObjectReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Selector" })
  selector?: string;
}
