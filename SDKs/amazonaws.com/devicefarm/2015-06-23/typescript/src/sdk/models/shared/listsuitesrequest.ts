import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListSuitesRequest
/** 
 * Represents a request to the list suites operation.
**/
export class ListSuitesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
