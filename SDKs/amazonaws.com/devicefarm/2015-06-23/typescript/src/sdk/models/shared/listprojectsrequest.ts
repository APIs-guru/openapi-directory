import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListProjectsRequest
/** 
 * Represents a request to the list projects operation.
**/
export class ListProjectsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
