import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RedshiftRetryOptions
/** 
 * Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon Redshift.
**/
export class RedshiftRetryOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DurationInSeconds" })
  durationInSeconds?: number;
}
