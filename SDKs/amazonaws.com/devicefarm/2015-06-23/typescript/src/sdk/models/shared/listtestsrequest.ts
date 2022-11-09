import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListTestsRequest
/** 
 * Represents a request to the list tests operation.
**/
export class ListTestsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
