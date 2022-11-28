import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionNotificationStateEnum } from "./connectionnotificationstateenum";
import { ConnectionNotificationTypeEnum } from "./connectionnotificationtypeenum";



// ConnectionNotification
/** 
 * Describes a connection notification for a VPC endpoint or VPC endpoint service.
**/
export class ConnectionNotification extends SpeakeasyBase {
  @SpeakeasyMetadata()
  connectionEvents?: string[];

  @SpeakeasyMetadata()
  connectionNotificationArn?: string;

  @SpeakeasyMetadata()
  connectionNotificationId?: string;

  @SpeakeasyMetadata()
  connectionNotificationState?: ConnectionNotificationStateEnum;

  @SpeakeasyMetadata()
  connectionNotificationType?: ConnectionNotificationTypeEnum;

  @SpeakeasyMetadata()
  serviceId?: string;

  @SpeakeasyMetadata()
  vpcEndpointId?: string;
}
