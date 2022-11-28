import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchArrayProperties } from "./batcharrayproperties";
import { BatchRetryStrategy } from "./batchretrystrategy";



// BatchParameters
/** 
 * The custom parameters to be used when the target is an Batch job.
**/
export class BatchParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ArrayProperties" })
  arrayProperties?: BatchArrayProperties;

  @SpeakeasyMetadata({ data: "json, name=JobDefinition" })
  jobDefinition: string;

  @SpeakeasyMetadata({ data: "json, name=JobName" })
  jobName: string;

  @SpeakeasyMetadata({ data: "json, name=RetryStrategy" })
  retryStrategy?: BatchRetryStrategy;
}
