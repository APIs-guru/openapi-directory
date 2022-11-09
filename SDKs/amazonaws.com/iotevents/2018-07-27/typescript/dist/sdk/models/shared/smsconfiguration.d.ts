import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RecipientDetail } from "./recipientdetail";
/**
 * Contains the configuration information of SMS notifications.
**/
export declare class SmsConfiguration extends SpeakeasyBase {
    additionalMessage?: string;
    recipients: RecipientDetail[];
    senderId?: string;
}
