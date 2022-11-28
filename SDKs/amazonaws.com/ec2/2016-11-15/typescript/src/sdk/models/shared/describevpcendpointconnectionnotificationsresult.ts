import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionNotification } from "./connectionnotification";



export class DescribeVpcEndpointConnectionNotificationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ConnectionNotification })
  connectionNotificationSet?: ConnectionNotification[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
