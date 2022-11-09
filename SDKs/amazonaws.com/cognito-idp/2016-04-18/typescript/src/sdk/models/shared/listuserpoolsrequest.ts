import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListUserPoolsRequest
/** 
 * Represents the request to list user pools.
**/
export class ListUserPoolsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
