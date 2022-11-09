import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListAgentsRequest
/** 
 * ListAgentsRequest
**/
export class ListAgentsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
