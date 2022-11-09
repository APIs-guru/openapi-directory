import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ValidationException
/** 
 * Indicates that your request is malformed in some manner. See the exception message.
**/
export class ValidationException extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}
