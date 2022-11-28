import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InvalidArnException
/** 
 * Indicates that the provided ARN value is not valid.
**/
export class InvalidArnException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
