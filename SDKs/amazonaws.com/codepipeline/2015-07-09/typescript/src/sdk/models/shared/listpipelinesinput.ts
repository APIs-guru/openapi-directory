import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListPipelinesInput
/** 
 * Represents the input of a <code>ListPipelines</code> action.
**/
export class ListPipelinesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
