import { SpeakeasyBase } from "../../../internal/utils";
import { KinesisStreamConfig } from "./kinesisstreamconfig";
/**
 * Contains information about the Amazon Kinesis data stream where you are sending real-time log data in a real-time log configuration.
**/
export declare class EndPoint extends SpeakeasyBase {
    kinesisStreamConfig?: KinesisStreamConfig;
    streamType: string;
}
