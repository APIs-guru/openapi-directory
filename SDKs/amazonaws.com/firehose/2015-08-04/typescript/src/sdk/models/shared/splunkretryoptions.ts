import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SplunkRetryOptions
/** 
 * Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Splunk, or if it doesn't receive an acknowledgment from Splunk.
**/
export class SplunkRetryOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=DurationInSeconds" })
  durationInSeconds?: number;
}
