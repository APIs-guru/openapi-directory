import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>
**/
export declare class Notifications extends SpeakeasyBase {
    completed?: string;
    error?: string;
    progressing?: string;
    warning?: string;
}
