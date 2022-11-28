import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon ES.
**/
export declare class ElasticsearchRetryOptions extends SpeakeasyBase {
    durationInSeconds?: number;
}
