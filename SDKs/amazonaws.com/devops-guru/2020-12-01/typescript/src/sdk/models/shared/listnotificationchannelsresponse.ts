import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotificationChannel } from "./notificationchannel";



export class ListNotificationChannelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Channels", elemType: NotificationChannel })
  channels?: NotificationChannel[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
