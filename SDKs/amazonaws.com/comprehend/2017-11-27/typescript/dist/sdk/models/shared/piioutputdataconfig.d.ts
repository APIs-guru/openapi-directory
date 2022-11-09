import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Provides configuration parameters for the output of PII entity detection jobs.
**/
export declare class PiiOutputDataConfig extends SpeakeasyBase {
    kmsKeyId?: string;
    s3Uri: string;
}
