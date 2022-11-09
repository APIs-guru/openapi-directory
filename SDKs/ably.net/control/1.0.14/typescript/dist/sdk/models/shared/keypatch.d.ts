import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum KeyPatchCapabilitiesEnum {
    Publish = "publish",
    Subscribe = "subscribe",
    History = "history",
    Presence = "presence",
    ChannelMetadata = "channel-metadata",
    PushAdmin = "push-admin",
    PushSubscribe = "push-subscribe",
    Statistics = "statistics"
}
export declare class KeyPatch extends SpeakeasyBase {
    capabilities?: KeyPatchCapabilitiesEnum[];
    channels?: string;
    name?: string;
}
