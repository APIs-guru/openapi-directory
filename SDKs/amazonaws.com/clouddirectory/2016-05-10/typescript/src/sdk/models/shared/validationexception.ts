import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ValidationException
/** 
 * Indicates that your request is malformed in some manner. See the exception message.
**/
export class ValidationException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
