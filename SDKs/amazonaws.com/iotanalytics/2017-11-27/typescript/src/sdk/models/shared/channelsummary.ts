import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelStorageSummary } from "./channelstoragesummary";
import { ChannelStatusEnum } from "./channelstatusenum";



// ChannelSummary
/** 
 * A summary of information about a channel.
**/
export class ChannelSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelName" })
  channelName?: string;

  @SpeakeasyMetadata({ data: "json, name=channelStorage" })
  channelStorage?: ChannelStorageSummary;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastMessageArrivalTime" })
  lastMessageArrivalTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ChannelStatusEnum;
}
