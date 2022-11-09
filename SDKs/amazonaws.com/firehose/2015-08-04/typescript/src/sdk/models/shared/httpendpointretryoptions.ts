import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HttpEndpointRetryOptions
/** 
 * Describes the retry behavior in case Kinesis Data Firehose is unable to deliver data to the specified HTTP endpoint destination, or if it doesn't receive a valid acknowledgment of receipt from the specified HTTP endpoint destination.
**/
export class HttpEndpointRetryOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=DurationInSeconds" })
  durationInSeconds?: number;
}
