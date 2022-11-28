import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum KeyPostCapabilitiesEnum {
    Publish = "publish",
    Subscribe = "subscribe",
    History = "history",
    Presence = "presence",
    ChannelMetadata = "channel-metadata",
    PushAdmin = "push-admin",
    PushSubscribe = "push-subscribe",
    Statistics = "statistics"
}


export class KeyPost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capabilities" })
  capabilities: KeyPostCapabilitiesEnum[];

  @SpeakeasyMetadata({ data: "json, name=channels" })
  channels: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
