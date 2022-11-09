import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum KeyResponseCapabilityEnum {
    Publish = "publish"
,    Subscribe = "subscribe"
,    History = "history"
,    Presence = "presence"
,    ChannelMetadata = "channel-metadata"
,    PushAdmin = "push-admin"
,    PushSubscribe = "push-subscribe"
,    Statistics = "statistics"
}


export class KeyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=appId" })
  appId?: string;

  @Metadata({ data: "json, name=capability" })
  capability?: Map<string, KeyResponseCapabilityEnum[]>;

  @Metadata({ data: "json, name=created" })
  created?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=modified" })
  modified?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
