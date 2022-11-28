import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotificationTypeEnum } from "./notificationtypeenum";
import { SlackNotificationConfiguration } from "./slacknotificationconfiguration";



export class Notification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=notificationType" })
  notificationType: NotificationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=slackConfiguration" })
  slackConfiguration?: SlackNotificationConfiguration;
}
