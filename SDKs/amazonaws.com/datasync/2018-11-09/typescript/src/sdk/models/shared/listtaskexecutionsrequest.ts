import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListTaskExecutionsRequest
/** 
 * ListTaskExecutions
**/
export class ListTaskExecutionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=TaskArn" })
  taskArn?: string;
}
