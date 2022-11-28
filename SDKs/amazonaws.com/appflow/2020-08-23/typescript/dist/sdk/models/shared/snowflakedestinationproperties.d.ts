import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorHandlingConfig } from "./errorhandlingconfig";
/**
 *  The properties that are applied when Snowflake is being used as a destination.
**/
export declare class SnowflakeDestinationProperties extends SpeakeasyBase {
    bucketPrefix?: string;
    errorHandlingConfig?: ErrorHandlingConfig;
    intermediateBucketName: string;
    object: string;
}
