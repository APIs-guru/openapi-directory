import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimestampValue } from "./timestampvalue";



// Message
/** 
 * Information about a message.
**/
export class Message extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputName" })
  inputName: string;

  @SpeakeasyMetadata({ data: "json, name=messageId" })
  messageId: string;

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: TimestampValue;
}
