import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RetentionPeriod } from "./retentionperiod";
export declare class CreateChannelResponse extends SpeakeasyBase {
    channelArn?: string;
    channelName?: string;
    retentionPeriod?: RetentionPeriod;
}
