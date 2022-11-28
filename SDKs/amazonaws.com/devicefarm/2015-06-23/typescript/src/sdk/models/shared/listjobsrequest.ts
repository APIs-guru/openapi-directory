import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListJobsRequest
/** 
 * Represents a request to the list jobs operation.
**/
export class ListJobsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
