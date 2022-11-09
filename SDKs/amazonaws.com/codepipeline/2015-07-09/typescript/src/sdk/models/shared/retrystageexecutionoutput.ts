import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RetryStageExecutionOutput
/** 
 * Represents the output of a <code>RetryStageExecution</code> action.
**/
export class RetryStageExecutionOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=pipelineExecutionId" })
  pipelineExecutionId?: string;
}
