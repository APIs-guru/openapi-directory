import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NotificationTypeEnum } from "./notificationtypeenum";
import { SlackNotificationConfiguration } from "./slacknotificationconfiguration";


export class Notification extends SpeakeasyBase {
  @Metadata({ data: "json, name=notificationType" })
  notificationType: NotificationTypeEnum;

  @Metadata({ data: "json, name=slackConfiguration" })
  slackConfiguration?: SlackNotificationConfiguration;
}
