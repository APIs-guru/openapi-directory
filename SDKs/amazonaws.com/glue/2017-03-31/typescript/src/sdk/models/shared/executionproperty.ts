import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExecutionProperty
/** 
 * An execution property of a job.
**/
export class ExecutionProperty extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxConcurrentRuns" })
  maxConcurrentRuns?: number;
}
