import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Channel } from "./channel";
import { ChannelStatistics } from "./channelstatistics";


export class DescribeChannelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=channel" })
  channel?: Channel;

  @Metadata({ data: "json, name=statistics" })
  statistics?: ChannelStatistics;
}
