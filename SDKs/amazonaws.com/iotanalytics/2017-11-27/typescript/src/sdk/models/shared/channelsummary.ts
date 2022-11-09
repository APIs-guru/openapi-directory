import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChannelStorageSummary } from "./channelstoragesummary";
import { ChannelStatusEnum } from "./channelstatusenum";


// ChannelSummary
/** 
 * A summary of information about a channel.
**/
export class ChannelSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelName" })
  channelName?: string;

  @Metadata({ data: "json, name=channelStorage" })
  channelStorage?: ChannelStorageSummary;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=lastMessageArrivalTime" })
  lastMessageArrivalTime?: Date;

  @Metadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @Metadata({ data: "json, name=status" })
  status?: ChannelStatusEnum;
}
