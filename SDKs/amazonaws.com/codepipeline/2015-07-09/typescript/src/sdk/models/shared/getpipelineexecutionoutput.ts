import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PipelineExecution } from "./pipelineexecution";



// GetPipelineExecutionOutput
/** 
 * Represents the output of a <code>GetPipelineExecution</code> action.
**/
export class GetPipelineExecutionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pipelineExecution" })
  pipelineExecution?: PipelineExecution;
}
