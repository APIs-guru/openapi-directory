import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Notifications
/** 
 * <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>
**/
export class Notifications extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Completed" })
  completed?: string;

  @SpeakeasyMetadata({ data: "json, name=Error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=Progressing" })
  progressing?: string;

  @SpeakeasyMetadata({ data: "json, name=Warning" })
  warning?: string;
}
