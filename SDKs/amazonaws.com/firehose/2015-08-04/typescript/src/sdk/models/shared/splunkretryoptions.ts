import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SplunkRetryOptions
/** 
 * Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Splunk, or if it doesn't receive an acknowledgment from Splunk.
**/
export class SplunkRetryOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DurationInSeconds" })
  durationInSeconds?: number;
}
