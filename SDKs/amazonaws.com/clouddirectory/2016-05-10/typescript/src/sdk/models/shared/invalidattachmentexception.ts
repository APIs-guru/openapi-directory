import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InvalidAttachmentException
/** 
 * Indicates that an attempt to attach an object with the same link name or to apply a schema with the same name has occurred. Rename the link or the schema and then try again.
**/
export class InvalidAttachmentException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
