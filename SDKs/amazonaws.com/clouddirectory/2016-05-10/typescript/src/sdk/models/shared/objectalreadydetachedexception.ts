import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObjectAlreadyDetachedException
/** 
 * Indicates that the object is not attached to the index.
**/
export class ObjectAlreadyDetachedException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
