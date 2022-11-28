import { SpeakeasyBase } from "../../../internal/utils";
import { RetentionPeriod } from "./retentionperiod";
export declare class CreateChannelResponse extends SpeakeasyBase {
    channelArn?: string;
    channelName?: string;
    retentionPeriod?: RetentionPeriod;
}
