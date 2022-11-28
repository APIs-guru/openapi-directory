import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StartPipelineExecutionOutput
/** 
 * Represents the output of a <code>StartPipelineExecution</code> action.
**/
export class StartPipelineExecutionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pipelineExecutionId" })
  pipelineExecutionId?: string;
}
