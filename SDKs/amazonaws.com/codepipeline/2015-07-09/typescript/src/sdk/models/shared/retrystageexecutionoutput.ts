import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RetryStageExecutionOutput
/** 
 * Represents the output of a <code>RetryStageExecution</code> action.
**/
export class RetryStageExecutionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pipelineExecutionId" })
  pipelineExecutionId?: string;
}
