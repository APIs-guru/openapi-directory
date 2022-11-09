import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListTagsForResourceRequest
/** 
 * The request object for <code>ListTagsForResource</code> operation.
**/
export class ListTagsForResourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResourceARN" })
  resourceArn: string;
}
