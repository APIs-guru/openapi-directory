import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StartPipelineExecutionOutput
/** 
 * Represents the output of a <code>StartPipelineExecution</code> action.
**/
export class StartPipelineExecutionOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=pipelineExecutionId" })
  pipelineExecutionId?: string;
}
