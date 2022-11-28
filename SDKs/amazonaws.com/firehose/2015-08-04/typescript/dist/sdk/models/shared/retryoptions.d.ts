import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  The retry behavior in case Kinesis Data Firehose is unable to deliver data to an Amazon S3 prefix.
**/
export declare class RetryOptions extends SpeakeasyBase {
    durationInSeconds?: number;
}
