import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListUserPoolsRequest
/** 
 * Represents the request to list user pools.
**/
export class ListUserPoolsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
