import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotificationConfiguration } from "./notificationconfiguration";



export class DescribeNotificationConfigurationsAnswer extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: NotificationConfiguration })
  notificationConfigurations: NotificationConfiguration[];
}
