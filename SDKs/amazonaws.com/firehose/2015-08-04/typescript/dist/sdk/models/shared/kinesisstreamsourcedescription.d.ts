import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details about a Kinesis data stream used as the source for a Kinesis Data Firehose delivery stream.
**/
export declare class KinesisStreamSourceDescription extends SpeakeasyBase {
    deliveryStartTimestamp?: Date;
    kinesisStreamArn?: string;
    roleArn?: string;
}
