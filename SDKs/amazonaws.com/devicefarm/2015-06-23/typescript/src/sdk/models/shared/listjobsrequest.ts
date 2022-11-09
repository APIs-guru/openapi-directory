import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListJobsRequest
/** 
 * Represents a request to the list jobs operation.
**/
export class ListJobsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
