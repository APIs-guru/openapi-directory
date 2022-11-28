import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExecutionProperty
/** 
 * An execution property of a job.
**/
export class ExecutionProperty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxConcurrentRuns" })
  maxConcurrentRuns?: number;
}
