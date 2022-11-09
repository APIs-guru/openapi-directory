import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListRunsRequest
/** 
 * Represents a request to the list runs operation.
**/
export class ListRunsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
