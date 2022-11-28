import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationChannel } from "./notificationchannel";
export declare class ListNotificationChannelsResponse extends SpeakeasyBase {
    channels?: NotificationChannel[];
    nextToken?: string;
}
