import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NotificationChannel } from "./notificationchannel";


export class ListNotificationChannelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Channels", elemType: shared.NotificationChannel })
  channels?: NotificationChannel[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
