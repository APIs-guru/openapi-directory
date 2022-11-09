import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InternalServiceErrorException
/** 
 * An internal error has occurred. Retry your request. If the problem persists, post a message with details on the AWS forums.
**/
export class InternalServiceErrorException extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}
