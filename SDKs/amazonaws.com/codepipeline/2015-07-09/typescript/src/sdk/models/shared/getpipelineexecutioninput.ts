import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetPipelineExecutionInput
/** 
 * Represents the input of a <code>GetPipelineExecution</code> action.
**/
export class GetPipelineExecutionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=pipelineExecutionId" })
  pipelineExecutionId: string;

  @Metadata({ data: "json, name=pipelineName" })
  pipelineName: string;
}
