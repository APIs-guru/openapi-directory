import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RetryOptions
/** 
 *  The retry behavior in case Kinesis Data Firehose is unable to deliver data to an Amazon S3 prefix.
**/
export class RetryOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=DurationInSeconds" })
  durationInSeconds?: number;
}
