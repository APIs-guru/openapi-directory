import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RetentionPeriod } from "./retentionperiod";


export class CreateChannelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelArn" })
  channelArn?: string;

  @Metadata({ data: "json, name=channelName" })
  channelName?: string;

  @Metadata({ data: "json, name=retentionPeriod" })
  retentionPeriod?: RetentionPeriod;
}
