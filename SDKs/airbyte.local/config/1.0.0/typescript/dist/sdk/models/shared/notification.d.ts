import { SpeakeasyBase } from "../../../internal/utils/utils";
import { NotificationTypeEnum } from "./notificationtypeenum";
import { SlackNotificationConfiguration } from "./slacknotificationconfiguration";
export declare class Notification extends SpeakeasyBase {
    notificationType: NotificationTypeEnum;
    slackConfiguration?: SlackNotificationConfiguration;
}
