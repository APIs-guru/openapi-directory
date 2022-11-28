import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListTagsForResourceRequest
/** 
 * The request object for <code>ListTagsForResource</code> operation.
**/
export class ListTagsForResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceARN" })
  resourceArn: string;
}
