import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The activity that determines the source of the messages to be processed.
**/
export declare class ChannelActivity extends SpeakeasyBase {
    channelName: string;
    name: string;
    next?: string;
}
