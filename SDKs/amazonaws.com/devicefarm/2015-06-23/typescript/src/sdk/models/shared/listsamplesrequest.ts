import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListSamplesRequest
/** 
 * Represents a request to the list samples operation.
**/
export class ListSamplesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
