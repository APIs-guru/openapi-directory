import { SpeakeasyBase } from "../../../internal/utils";
import { Channel } from "./channel";
/**
 * The configuration for notifications stored for each profiling group. This includes up to to two channels and a list of event publishers associated with each channel.
**/
export declare class NotificationConfiguration extends SpeakeasyBase {
    channels?: Channel[];
}
