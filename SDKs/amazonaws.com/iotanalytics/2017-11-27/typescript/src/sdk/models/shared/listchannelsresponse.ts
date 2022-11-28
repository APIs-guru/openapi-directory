import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelSummary } from "./channelsummary";



export class ListChannelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelSummaries", elemType: ChannelSummary })
  channelSummaries?: ChannelSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
