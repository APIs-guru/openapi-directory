import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Notifications
/** 
 * <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>
**/
export class Notifications extends SpeakeasyBase {
  @Metadata({ data: "json, name=Completed" })
  completed?: string;

  @Metadata({ data: "json, name=Error" })
  error?: string;

  @Metadata({ data: "json, name=Progressing" })
  progressing?: string;

  @Metadata({ data: "json, name=Warning" })
  warning?: string;
}
