import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BatchArrayProperties } from "./batcharrayproperties";
import { BatchRetryStrategy } from "./batchretrystrategy";


// BatchParameters
/** 
 * The custom parameters to be used when the target is an Batch job.
**/
export class BatchParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=ArrayProperties" })
  arrayProperties?: BatchArrayProperties;

  @Metadata({ data: "json, name=JobDefinition" })
  jobDefinition: string;

  @Metadata({ data: "json, name=JobName" })
  jobName: string;

  @Metadata({ data: "json, name=RetryStrategy" })
  retryStrategy?: BatchRetryStrategy;
}
