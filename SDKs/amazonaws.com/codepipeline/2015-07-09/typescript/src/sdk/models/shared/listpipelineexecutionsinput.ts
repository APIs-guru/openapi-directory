import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListPipelineExecutionsInput
/** 
 * Represents the input of a <code>ListPipelineExecutions</code> action.
**/
export class ListPipelineExecutionsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=pipelineName" })
  pipelineName: string;
}
