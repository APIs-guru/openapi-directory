import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListPipelinesInput
/** 
 * Represents the input of a <code>ListPipelines</code> action.
**/
export class ListPipelinesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
