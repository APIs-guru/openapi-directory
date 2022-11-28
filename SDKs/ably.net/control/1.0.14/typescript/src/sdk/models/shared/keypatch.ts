import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum KeyPatchCapabilitiesEnum {
    Publish = "publish",
    Subscribe = "subscribe",
    History = "history",
    Presence = "presence",
    ChannelMetadata = "channel-metadata",
    PushAdmin = "push-admin",
    PushSubscribe = "push-subscribe",
    Statistics = "statistics"
}


export class KeyPatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capabilities" })
  capabilities?: KeyPatchCapabilitiesEnum[];

  @SpeakeasyMetadata({ data: "json, name=channels" })
  channels?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
