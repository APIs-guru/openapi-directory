import { SpeakeasyBase } from "../../../internal/utils";
import { Channel } from "./channel";
import { ChannelStatistics } from "./channelstatistics";
export declare class DescribeChannelResponse extends SpeakeasyBase {
    channel?: Channel;
    statistics?: ChannelStatistics;
}
