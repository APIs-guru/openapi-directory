import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RetentionPeriod } from "./retentionperiod";



export class CreateChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelArn" })
  channelArn?: string;

  @SpeakeasyMetadata({ data: "json, name=channelName" })
  channelName?: string;

  @SpeakeasyMetadata({ data: "json, name=retentionPeriod" })
  retentionPeriod?: RetentionPeriod;
}
