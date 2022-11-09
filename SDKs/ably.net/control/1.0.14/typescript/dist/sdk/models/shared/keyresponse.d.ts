import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum KeyResponseCapabilityEnum {
    Publish = "publish",
    Subscribe = "subscribe",
    History = "history",
    Presence = "presence",
    ChannelMetadata = "channel-metadata",
    PushAdmin = "push-admin",
    PushSubscribe = "push-subscribe",
    Statistics = "statistics"
}
export declare class KeyResponse extends SpeakeasyBase {
    appId?: string;
    capability?: Map<string, KeyResponseCapabilityEnum[]>;
    created?: number;
    id?: string;
    key?: string;
    modified?: number;
    name?: string;
}
