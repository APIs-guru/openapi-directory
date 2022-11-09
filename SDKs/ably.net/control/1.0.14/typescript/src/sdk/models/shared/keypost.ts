import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum KeyPostCapabilitiesEnum {
    Publish = "publish"
,    Subscribe = "subscribe"
,    History = "history"
,    Presence = "presence"
,    ChannelMetadata = "channel-metadata"
,    PushAdmin = "push-admin"
,    PushSubscribe = "push-subscribe"
,    Statistics = "statistics"
}


export class KeyPost extends SpeakeasyBase {
  @Metadata({ data: "json, name=capabilities" })
  capabilities: KeyPostCapabilitiesEnum[];

  @Metadata({ data: "json, name=channels" })
  channels: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}
