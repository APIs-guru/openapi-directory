import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListProjectsRequest
/** 
 * Represents a request to the list projects operation.
**/
export class ListProjectsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
