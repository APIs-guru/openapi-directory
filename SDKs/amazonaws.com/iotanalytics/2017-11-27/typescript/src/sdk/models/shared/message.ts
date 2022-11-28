import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Message
/** 
 * Information about a message.
**/
export class Message extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messageId" })
  messageId: string;

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload: string;
}
