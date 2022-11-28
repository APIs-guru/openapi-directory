import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PipelineExecutionSummary } from "./pipelineexecutionsummary";



// ListPipelineExecutionsOutput
/** 
 * Represents the output of a <code>ListPipelineExecutions</code> action.
**/
export class ListPipelineExecutionsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=pipelineExecutionSummaries", elemType: PipelineExecutionSummary })
  pipelineExecutionSummaries?: PipelineExecutionSummary[];
}
