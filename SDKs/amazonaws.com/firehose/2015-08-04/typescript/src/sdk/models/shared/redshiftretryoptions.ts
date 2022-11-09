import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RedshiftRetryOptions
/** 
 * Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon Redshift.
**/
export class RedshiftRetryOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=DurationInSeconds" })
  durationInSeconds?: number;
}
