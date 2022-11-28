import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SendEmailResponse
/** 
 * Represents a unique message ID.
**/
export class SendEmailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  messageId: string;
}
