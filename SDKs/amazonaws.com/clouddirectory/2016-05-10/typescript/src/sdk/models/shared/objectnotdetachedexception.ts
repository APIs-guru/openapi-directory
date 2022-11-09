import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObjectNotDetachedException
/** 
 * Indicates that the requested operation cannot be completed because the object has not been detached from the tree.
**/
export class ObjectNotDetachedException extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}
