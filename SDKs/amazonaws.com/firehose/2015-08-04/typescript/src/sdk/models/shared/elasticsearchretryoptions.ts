import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ElasticsearchRetryOptions
/** 
 * Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon ES.
**/
export class ElasticsearchRetryOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DurationInSeconds" })
  durationInSeconds?: number;
}
