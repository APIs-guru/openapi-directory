import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionNotificationStateEnum } from "./connectionnotificationstateenum";
import { ConnectionNotificationTypeEnum } from "./connectionnotificationtypeenum";
/**
 * Describes a connection notification for a VPC endpoint or VPC endpoint service.
**/
export declare class ConnectionNotification extends SpeakeasyBase {
    connectionEvents?: string[];
    connectionNotificationArn?: string;
    connectionNotificationId?: string;
    connectionNotificationState?: ConnectionNotificationStateEnum;
    connectionNotificationType?: ConnectionNotificationTypeEnum;
    serviceId?: string;
    vpcEndpointId?: string;
}
