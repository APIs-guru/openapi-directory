import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObjectAlreadyDetachedException
/** 
 * Indicates that the object is not attached to the index.
**/
export class ObjectAlreadyDetachedException extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}
