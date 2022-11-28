import { SpeakeasyBase } from "../../../internal/utils";
export declare enum KeyPostCapabilitiesEnum {
    Publish = "publish",
    Subscribe = "subscribe",
    History = "history",
    Presence = "presence",
    ChannelMetadata = "channel-metadata",
    PushAdmin = "push-admin",
    PushSubscribe = "push-subscribe",
    Statistics = "statistics"
}
export declare class KeyPost extends SpeakeasyBase {
    capabilities: KeyPostCapabilitiesEnum[];
    channels: string;
    name: string;
}
