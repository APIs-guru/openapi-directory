import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ChannelStorageSummary } from "./channelstoragesummary";
import { ChannelStatusEnum } from "./channelstatusenum";
/**
 * A summary of information about a channel.
**/
export declare class ChannelSummary extends SpeakeasyBase {
    channelName?: string;
    channelStorage?: ChannelStorageSummary;
    creationTime?: Date;
    lastMessageArrivalTime?: Date;
    lastUpdateTime?: Date;
    status?: ChannelStatusEnum;
}
