import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about the Amazon Kinesis data stream where you are sending real-time log data.
**/
export declare class KinesisStreamConfig extends SpeakeasyBase {
    roleArn: string;
    streamArn: string;
}
