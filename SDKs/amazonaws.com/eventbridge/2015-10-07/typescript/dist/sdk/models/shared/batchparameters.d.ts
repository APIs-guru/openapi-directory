import { SpeakeasyBase } from "../../../internal/utils";
import { BatchArrayProperties } from "./batcharrayproperties";
import { BatchRetryStrategy } from "./batchretrystrategy";
/**
 * The custom parameters to be used when the target is an Batch job.
**/
export declare class BatchParameters extends SpeakeasyBase {
    arrayProperties?: BatchArrayProperties;
    jobDefinition: string;
    jobName: string;
    retryStrategy?: BatchRetryStrategy;
}
