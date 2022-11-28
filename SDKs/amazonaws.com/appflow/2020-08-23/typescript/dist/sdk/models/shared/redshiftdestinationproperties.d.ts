import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorHandlingConfig } from "./errorhandlingconfig";
/**
 *  The properties that are applied when Amazon Redshift is being used as a destination.
**/
export declare class RedshiftDestinationProperties extends SpeakeasyBase {
    bucketPrefix?: string;
    errorHandlingConfig?: ErrorHandlingConfig;
    intermediateBucketName: string;
    object: string;
}
