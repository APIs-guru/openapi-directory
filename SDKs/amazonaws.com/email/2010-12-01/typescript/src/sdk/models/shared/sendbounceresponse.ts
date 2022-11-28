import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SendBounceResponse
/** 
 * Represents a unique message ID.
**/
export class SendBounceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  messageId?: string;
}
