import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListPipelineExecutionsInput
/** 
 * Represents the input of a <code>ListPipelineExecutions</code> action.
**/
export class ListPipelineExecutionsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=pipelineName" })
  pipelineName: string;
}
