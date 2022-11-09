import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Message
/** 
 * Information about a message.
**/
export class Message extends SpeakeasyBase {
  @Metadata({ data: "json, name=messageId" })
  messageId: string;

  @Metadata({ data: "json, name=payload" })
  payload: string;
}
