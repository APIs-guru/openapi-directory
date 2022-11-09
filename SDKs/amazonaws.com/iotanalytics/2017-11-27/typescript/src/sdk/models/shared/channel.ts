import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RetentionPeriod } from "./retentionperiod";
import { ChannelStatusEnum } from "./channelstatusenum";
import { ChannelStorage } from "./channelstorage";


// Channel
/** 
 * A collection of data from an MQTT topic. Channels archive the raw, unprocessed messages before publishing the data to a pipeline.
**/
export class Channel extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=lastMessageArrivalTime" })
  lastMessageArrivalTime?: Date;

  @Metadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=retentionPeriod" })
  retentionPeriod?: RetentionPeriod;

  @Metadata({ data: "json, name=status" })
  status?: ChannelStatusEnum;

  @Metadata({ data: "json, name=storage" })
  storage?: ChannelStorage;
}
