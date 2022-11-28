import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Splunk, or if it doesn't receive an acknowledgment from Splunk.
**/
export declare class SplunkRetryOptions extends SpeakeasyBase {
    durationInSeconds?: number;
}
