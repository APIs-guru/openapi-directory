import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PipelineExecutionSummary } from "./pipelineexecutionsummary";


// ListPipelineExecutionsOutput
/** 
 * Represents the output of a <code>ListPipelineExecutions</code> action.
**/
export class ListPipelineExecutionsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=pipelineExecutionSummaries", elemType: shared.PipelineExecutionSummary })
  pipelineExecutionSummaries?: PipelineExecutionSummary[];
}
