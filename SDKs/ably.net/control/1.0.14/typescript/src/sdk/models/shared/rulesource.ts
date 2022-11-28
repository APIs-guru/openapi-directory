import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RuleSourceTypeEnum {
    ChannelMessage = "channel.message",
    ChannelPresence = "channel.presence",
    ChannelLifecycle = "channel.lifecycle",
    ChannelOccupancy = "channel.occupancy"
}


export class RuleSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelFilter" })
  channelFilter: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: RuleSourceTypeEnum;
}
