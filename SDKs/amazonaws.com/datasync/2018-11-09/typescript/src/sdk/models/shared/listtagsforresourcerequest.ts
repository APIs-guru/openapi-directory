import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListTagsForResourceRequest
/** 
 * ListTagsForResourceRequest
**/
export class ListTagsForResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
