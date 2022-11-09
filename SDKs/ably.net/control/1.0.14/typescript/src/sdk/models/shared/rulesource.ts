import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RuleSourceTypeEnum {
    ChannelMessage = "channel.message"
,    ChannelPresence = "channel.presence"
,    ChannelLifecycle = "channel.lifecycle"
,    ChannelOccupancy = "channel.occupancy"
}


export class RuleSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelFilter" })
  channelFilter: string;

  @Metadata({ data: "json, name=type" })
  type: RuleSourceTypeEnum;
}
