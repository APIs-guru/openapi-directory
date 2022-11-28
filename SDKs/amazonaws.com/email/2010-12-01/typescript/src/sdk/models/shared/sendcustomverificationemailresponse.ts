import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SendCustomVerificationEmailResponse
/** 
 * The response received when attempting to send the custom verification email.
**/
export class SendCustomVerificationEmailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  messageId?: string;
}
