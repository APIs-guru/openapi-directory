import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimestampValue } from "./timestampvalue";


// Message
/** 
 * Information about a message.
**/
export class Message extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputName" })
  inputName: string;

  @Metadata({ data: "json, name=messageId" })
  messageId: string;

  @Metadata({ data: "json, name=payload" })
  payload: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: TimestampValue;
}
