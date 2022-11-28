import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum KeyResponseCapabilityEnum {
    Publish = "publish",
    Subscribe = "subscribe",
    History = "history",
    Presence = "presence",
    ChannelMetadata = "channel-metadata",
    PushAdmin = "push-admin",
    PushSubscribe = "push-subscribe",
    Statistics = "statistics"
}


export class KeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=capability" })
  capability?: Map<string, KeyResponseCapabilityEnum[]>;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=modified" })
  modified?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
