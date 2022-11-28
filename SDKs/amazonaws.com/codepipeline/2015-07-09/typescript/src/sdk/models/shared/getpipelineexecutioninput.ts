import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetPipelineExecutionInput
/** 
 * Represents the input of a <code>GetPipelineExecution</code> action.
**/
export class GetPipelineExecutionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pipelineExecutionId" })
  pipelineExecutionId: string;

  @SpeakeasyMetadata({ data: "json, name=pipelineName" })
  pipelineName: string;
}
