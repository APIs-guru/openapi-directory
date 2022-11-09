import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InvalidArnException
/** 
 * Indicates that the provided ARN value is not valid.
**/
export class InvalidArnException extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}
