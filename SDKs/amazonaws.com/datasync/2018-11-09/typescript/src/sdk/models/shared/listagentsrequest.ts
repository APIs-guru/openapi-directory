import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListAgentsRequest
/** 
 * ListAgentsRequest
**/
export class ListAgentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
