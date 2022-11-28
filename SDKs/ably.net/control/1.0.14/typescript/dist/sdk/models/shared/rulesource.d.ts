import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RuleSourceTypeEnum {
    ChannelMessage = "channel.message",
    ChannelPresence = "channel.presence",
    ChannelLifecycle = "channel.lifecycle",
    ChannelOccupancy = "channel.occupancy"
}
export declare class RuleSource extends SpeakeasyBase {
    channelFilter: string;
    type: RuleSourceTypeEnum;
}
