import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PipelineExecution } from "./pipelineexecution";


// GetPipelineExecutionOutput
/** 
 * Represents the output of a <code>GetPipelineExecution</code> action.
**/
export class GetPipelineExecutionOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=pipelineExecution" })
  pipelineExecution?: PipelineExecution;
}
