import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the retry behavior in case Kinesis Data Firehose is unable to deliver data to the specified HTTP endpoint destination, or if it doesn't receive a valid acknowledgment of receipt from the specified HTTP endpoint destination.
**/
export declare class HttpEndpointRetryOptions extends SpeakeasyBase {
    durationInSeconds?: number;
}
