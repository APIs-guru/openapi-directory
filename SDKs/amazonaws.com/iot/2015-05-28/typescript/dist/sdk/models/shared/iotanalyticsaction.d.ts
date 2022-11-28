import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Sends message data to an IoT Analytics channel.
**/
export declare class IotAnalyticsAction extends SpeakeasyBase {
    batchMode?: boolean;
    channelArn?: string;
    channelName?: string;
    roleArn?: string;
}
