import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon Redshift.
**/
export declare class RedshiftRetryOptions extends SpeakeasyBase {
    durationInSeconds?: number;
}
