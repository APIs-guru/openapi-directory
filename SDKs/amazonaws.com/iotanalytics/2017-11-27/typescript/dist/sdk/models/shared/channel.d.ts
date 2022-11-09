import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RetentionPeriod } from "./retentionperiod";
import { ChannelStatusEnum } from "./channelstatusenum";
import { ChannelStorage } from "./channelstorage";
/**
 * A collection of data from an MQTT topic. Channels archive the raw, unprocessed messages before publishing the data to a pipeline.
**/
export declare class Channel extends SpeakeasyBase {
    arn?: string;
    creationTime?: Date;
    lastMessageArrivalTime?: Date;
    lastUpdateTime?: Date;
    name?: string;
    retentionPeriod?: RetentionPeriod;
    status?: ChannelStatusEnum;
    storage?: ChannelStorage;
}
