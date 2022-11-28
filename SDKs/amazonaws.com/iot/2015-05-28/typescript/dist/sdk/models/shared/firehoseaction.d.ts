import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an action that writes data to an Amazon Kinesis Firehose stream.
**/
export declare class FirehoseAction extends SpeakeasyBase {
    batchMode?: boolean;
    deliveryStreamName: string;
    roleArn: string;
    separator?: string;
}
