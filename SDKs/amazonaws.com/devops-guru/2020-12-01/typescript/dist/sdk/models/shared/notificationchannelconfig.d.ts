import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SnsChannelConfig } from "./snschannelconfig";
/**
 *  Information about notification channels you have configured with DevOps Guru. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS).
**/
export declare class NotificationChannelConfig extends SpeakeasyBase {
    sns: SnsChannelConfig;
}
