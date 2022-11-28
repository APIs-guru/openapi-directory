import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Channel } from "./channel";
import { ChannelStatistics } from "./channelstatistics";



export class DescribeChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel?: Channel;

  @SpeakeasyMetadata({ data: "json, name=statistics" })
  statistics?: ChannelStatistics;
}
