import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationConfiguration } from "./notificationconfiguration";
export declare class DescribeNotificationConfigurationsAnswer extends SpeakeasyBase {
    nextToken?: string;
    notificationConfigurations: NotificationConfiguration[];
}
