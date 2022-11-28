import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an action to write data to an Amazon Kinesis stream.
**/
export declare class KinesisAction extends SpeakeasyBase {
    partitionKey?: string;
    roleArn: string;
    streamName: string;
}
