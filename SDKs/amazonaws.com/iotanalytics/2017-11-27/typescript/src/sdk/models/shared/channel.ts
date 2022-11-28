import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RetentionPeriod } from "./retentionperiod";
import { ChannelStatusEnum } from "./channelstatusenum";
import { ChannelStorage } from "./channelstorage";



// Channel
/** 
 * A collection of data from an MQTT topic. Channels archive the raw, unprocessed messages before publishing the data to a pipeline.
**/
export class Channel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastMessageArrivalTime" })
  lastMessageArrivalTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=retentionPeriod" })
  retentionPeriod?: RetentionPeriod;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ChannelStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=storage" })
  storage?: ChannelStorage;
}
