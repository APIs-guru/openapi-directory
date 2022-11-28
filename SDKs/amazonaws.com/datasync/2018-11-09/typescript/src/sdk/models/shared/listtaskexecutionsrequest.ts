import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListTaskExecutionsRequest
/** 
 * ListTaskExecutions
**/
export class ListTaskExecutionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=TaskArn" })
  taskArn?: string;
}
