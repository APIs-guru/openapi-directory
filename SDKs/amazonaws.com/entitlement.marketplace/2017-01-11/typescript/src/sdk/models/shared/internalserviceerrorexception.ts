import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InternalServiceErrorException
/** 
 * An internal error has occurred. Retry your request. If the problem persists, post a message with details on the AWS forums.
**/
export class InternalServiceErrorException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
