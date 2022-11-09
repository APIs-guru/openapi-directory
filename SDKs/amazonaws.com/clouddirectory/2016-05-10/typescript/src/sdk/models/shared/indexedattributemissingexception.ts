import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IndexedAttributeMissingException
/** 
 * An object has been attempted to be attached to an object that does not have the appropriate attribute value.
**/
export class IndexedAttributeMissingException extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}
