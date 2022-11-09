import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ElasticsearchRetryOptions
/** 
 * Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon ES.
**/
export class ElasticsearchRetryOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=DurationInSeconds" })
  durationInSeconds?: number;
}
